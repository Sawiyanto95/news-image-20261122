// Render entry.html to entry.png with Playwright's headless shell.
// playwright-core is resolved from the workdir root's node_modules,
// which symlinks to the 20261118 workdir's copy (not /tmp).
import { chromium } from '../node_modules/playwright-core/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath: '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1187/chrome-linux/headless_shell',
  args: ['--no-sandbox', '--force-device-scale-factor=1'],
});
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + join(dir, 'entry.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(dir, 'entry.png') });
await browser.close();
console.log('rendered entry.png');
