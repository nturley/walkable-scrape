# Walk Score Scraper

This script visits walkscore.com for a particular address and screenshots it

There's also an associated github action that triggers once a week, runs the script and executes it and uploads the screenshot to github artifacts which retains it for 90 days.


### How do I change the URL?
Look at `index.mjs`. There's a line that visits the URL

```js
// Navigate the page to a URL
await page.goto('https://www.walkscore.com/score/1130-e-450-n-provo-ut-84606');
```

### How do I download the screenshots?

Actions tab
![image](https://github.com/nturley/walkable-scrape/assets/2446659/44628d05-c930-4a21-8338-310d516b42fd)

Click on the workflow for the time you are interested in. And artifacts is near the bottom

![image](https://github.com/nturley/walkable-scrape/assets/2446659/998f0a1c-50b0-4bbe-8357-8e08e7fc832c)





