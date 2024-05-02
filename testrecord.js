const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://mcstaging.shop.pggwrightson.co.nz/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.goto('https://mcstaging.shop.pggwrightson.co.nz/shop');
  await page.getByRole('link', { name: 'YaraTera Kristalon White 25 kg' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();