import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL = process.env.BASE_URL || 'http://localhost:5173';
const outputDir = new URL('../screenshots/', import.meta.url);
await fs.mkdir(outputDir, { recursive: true });

for (const viewport of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
  const consoleErrors = [];
  const request404 = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('requestfailed', req => request404.push(`FAILED ${req.method()} ${req.url()} ${req.failure()?.errorText || ''}`));
  page.on('response', res => { if (res.status() === 404) request404.push(`404 ${res.request().method()} ${res.url()}`); });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.screenshot({ path: new URL(`./${viewport.name}-full.png`, outputDir).pathname, fullPage: true });
  const checks = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.product-card')];
    const boxes = cards.map(el => el.getBoundingClientRect());
    const overlap = [];
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], b = boxes[j];
      if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) overlap.push([i + 1, j + 1]);
    }
    const broken = [...document.querySelectorAll('img')].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
    const svgMissing = [...document.querySelectorAll('svg')].filter(svg => !svg.getBoundingClientRect().width).length;
    return { overlap, bodyOverflow: document.body.scrollWidth > document.body.clientWidth, cardCount: cards.length, broken, svgMissing, heroLines: getComputedStyle(document.querySelector('h1')).lineHeight };
  });
  console.log(JSON.stringify({ viewport, checks, consoleErrors, request404 }, null, 2));
  await browser.close();
}
