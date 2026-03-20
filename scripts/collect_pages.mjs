import { chromium } from 'playwright';
import fs from 'fs';

const pages = [
  { path: '/', name: 'home' },
  { path: '/PracticeAreas', name: 'practice-areas' },
  { path: '/PracticeAreas/Banking', name: 'banking' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

  for (const p of pages) {
    console.log(`\n--- Visiting ${p.path} ---`);

    page.on('console', msg => {
      console.log(`[console][${p.name}] ${msg.type()}: ${msg.text()}`);
    });

    page.on('pageerror', err => {
      console.log(`[error][${p.name}] ${err.message}`);
    });

    await page.goto(`http://localhost:5174${p.path}`, { waitUntil: 'networkidle' });
    const title = await page.title();
    console.log(`[info][${p.name}] title: ${title}`);

    const screenshotPath = `screenshots/${p.name}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`[info][${p.name}] screenshot saved: ${screenshotPath}`);

    // remove listeners to avoid duplicate logs on next iteration
    page.removeAllListeners('console');
    page.removeAllListeners('pageerror');
  }

  await browser.close();
  console.log('\nDone.');
})();
