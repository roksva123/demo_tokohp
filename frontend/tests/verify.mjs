import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const baseURL = process.env.BASE_URL || "http://localhost:5173";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const screenshotDir = path.join(root, "screenshots");
await fs.mkdir(screenshotDir, { recursive: true });

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];
const browser = await chromium.launch({ headless: true });
let failures = 0;

function check(condition, message) {
  if (condition) console.log(`PASS ${message}`);
  else { console.log(`FAIL ${message}`); failures += 1; }
}

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
  page.on("requestfailed", (request) => failedRequests.push(`${request.method()} ${request.url()}`));
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(screenshotDir, `${viewport.name}-full.png`), fullPage: true });

  const result = await page.evaluate(() => {
    const rects = [...document.querySelectorAll(".card[data-type]")].map((card) => card.getBoundingClientRect());
    const overlaps = [];
    for (let i = 0; i < rects.length; i += 1) for (let j = i + 1; j < rects.length; j += 1) {
      const a = rects[i];
      const b = rects[j];
      if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) overlaps.push([i, j]);
    }
    return {
      title: document.title,
      heroTitle: document.querySelector(".hero__title")?.textContent.trim(),
      heroCanvas: Boolean(document.querySelector(".hero__canvas")),
      heroCaption: Boolean(document.querySelector(".hero__caption")),
      storySteps: document.querySelectorAll(".story__step").length,
      storyCanvas: Boolean(document.querySelector(".story__canvas")),
      flashCards: document.querySelectorAll(".flash-card[data-type]").length,
      flashTypes: [...document.querySelectorAll(".flash-card[data-type]")].map((card) => card.dataset.type),
      cards: document.querySelectorAll("#catalog .grid .card[data-type]").length,
      grid: Boolean(document.querySelector("#catalog .grid")),
      cardMeta: document.querySelectorAll(".card__meta").length,
      cardMedia: document.querySelectorAll(".card__media").length,
      cardInfo: document.querySelectorAll(".card__info").length,
      filters: [...document.querySelectorAll(".filter[data-filter]")].map((button) => button.dataset.filter),
      bodyOverflow: document.body.scrollWidth > document.documentElement.clientWidth,
      overlaps,
      customCursor: Boolean(document.querySelector("[class*='cursor'], body::after")),
      lenis: Boolean(window.__lenis),
      brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).length,
      heroOverflow: getComputedStyle(document.querySelector(".hero")).overflow,
      styles: [...document.querySelectorAll("style, link[rel='stylesheet']")].length,
    };
  });

  check(result.heroTitle.includes("Gadget terbaik") && result.heroTitle.includes("untuk hari yang") && result.heroTitle.includes("lebih baik."), `${viewport.name}: hero title structure`);
  check(result.heroCanvas && result.heroCaption, `${viewport.name}: hero canvas and caption`);
  check(result.storySteps === 3 && result.storyCanvas, `${viewport.name}: story canvas and three steps`);
  check(result.flashCards === 4 && new Set(result.flashTypes).size === 4 && ["phone", "earbuds", "watch", "powerbank"].every((type) => result.flashTypes.includes(type)), `${viewport.name}: four distinct flash sale types`);
  check(result.cards >= 16 && result.grid && result.cardMeta === result.cards && result.cardMedia === result.cards && result.cardInfo === result.cards, `${viewport.name}: catalog cards and exact structure`);
  check(["all", "smartphone", "audio", "smartwatch", "laptop", "aksesoris"].every((type) => result.filters.includes(type)), `${viewport.name}: exact filter values`);
  check(!result.bodyOverflow, `${viewport.name}: no body horizontal overflow`);
  check(result.overlaps.length === 0, `${viewport.name}: no catalog card overlaps`);
  check(!result.customCursor, `${viewport.name}: no custom cursor`);
  check(result.lenis, `${viewport.name}: Lenis exposed`);
  check(result.brokenImages === 0, `${viewport.name}: no broken images`);
  check(result.heroOverflow !== "hidden", `${viewport.name}: hero is not overflow hidden`);
  check(consoleErrors.length === 0, `${viewport.name}: no console errors (${consoleErrors.length})`);
  check(failedRequests.length === 0, `${viewport.name}: no failed requests (${failedRequests.length})`);
  console.log(JSON.stringify({ viewport, result, consoleErrors, failedRequests }, null, 2));
  await page.close();
}

await browser.close();
if (failures) {
  console.log(`\n${failures} TES GAGAL`);
  process.exitCode = 1;
} else {
  console.log("\nSEMUA TES LULUS");
}
