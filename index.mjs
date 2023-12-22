import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.walkscore.com/score/1130-e-450-n-provo-ut-84606');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Take a screenshot of the page
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
})();
