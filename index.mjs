import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  console.log('launching browser...');
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  console.log('navigating to page...');

  // Navigate the page to a URL
  await page.goto('https://www.walkscore.com/score/1130-e-450-n-provo-ut-84606');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  const fname = `screenshots/${new Date().toISOString().replaceAll(':', '_', )}.png`
  console.log(`Saving screenshot to ${fname}...`);

  // Take a screenshot of the page
  await page.screenshot({path: fname});

  await browser.close();
})();
