# Walk Score Scraper

This script visits walkscore.com for a particular address and screenshots it

There's also an associated github action that triggers once a week, runs the script and executes it and commits the screenshot to the repo.

Note: make sure the workflow runner has write access to the repo
![image](https://github.com/nturley/walkable-scrape/assets/2446659/dcfc44f1-5546-425f-9371-213774b0a490)


### How do I change the URL?
Look at `index.mjs`. There's a line that visits the URL

```js
// Navigate the page to a URL
await page.goto('https://www.walkscore.com/score/1130-e-450-n-provo-ut-84606');
```






