import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseURL = process.env.BASE_URL || "http://localhost:5173";
const outputDir = path.resolve("screenshots");
await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
for (const viewport of [{ name: "hero-1920", width: 1920, height: 1080 }, { name: "hero-1440", width: 1440, height: 900 }]) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
  const consoleErrors = [];
  page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
  page.on("pageerror", (error) => consoleErrors.push(error.message));
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, `${viewport.name}.png`), fullPage: false });
  const metrics = await page.evaluate(() => {
    const hero = document.querySelector(".hero");
    const canvasWrap = document.querySelector(".hero__canvas");
    const canvas = document.querySelector(".hero__canvas canvas");
    const caption = document.querySelector(".hero__caption");
    const circle = getComputedStyle(canvasWrap, "::before");
    const heroRect = hero.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const wrapRect = canvasWrap.getBoundingClientRect();
    const captionRect = caption.getBoundingClientRect();
    return {
      viewport: { width: innerWidth, height: innerHeight },
      hero: { top: heroRect.top, bottom: heroRect.bottom, height: heroRect.height },
      canvas: { width: canvasRect.width, height: canvasRect.height, connectedToWrapper: canvas.parentElement === canvasWrap },
      wrapper: { width: wrapRect.width, height: wrapRect.height },
      caption: { top: captionRect.top, wrapperBottom: wrapRect.bottom, position: getComputedStyle(caption).position },
      circle: { background: circle.backgroundColor, zIndex: circle.zIndex, width: circle.width },
      rendererCanvas: { transparent: getComputedStyle(canvas).backgroundColor },
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      lenis: Boolean(window.__lenis),
    };
  });
  console.log(JSON.stringify({ viewport, metrics, consoleErrors }, null, 2));
  await page.close();
}
await browser.close();
