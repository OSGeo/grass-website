import puppeteer from 'puppeteer';
import xml2js from 'xml2js';
import fs from 'fs';
import path from 'path';

(async () => {
  // Create a directory for screenshots if it doesn't exist.
  const screenshotDir = 'screenshots/images';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  // Counter to generate unique screenshot filenames.
  let screenshotCounter = 0;

  // Recursive function to process sitemaps.
  async function processSitemap(url, browser) {
    try {
      console.log(`Fetching: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Error fetching ${url}: ${response.statusText}`);
        return;
      }
      
      const xml = await response.text();
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(xml);
      
      // Check if XML is a sitemap index.
      if (result.sitemapindex) {
        const sitemaps = result.sitemapindex.sitemap;
        for (const sitemap of sitemaps) {
          const sitemapUrl = sitemap.loc[0];
          console.log(`Sitemap: ${sitemapUrl}`);
          // Recursively process each nested sitemap.
          await processSitemap(sitemapUrl, browser);
        }
      } else if (result.urlset) {
        // XML contains actual URLs.
        const urls = result.urlset.url;
        for (const urlEntry of urls) {
          const pageUrl = urlEntry.loc[0];
          console.log(`URL: ${pageUrl}`);
          const urlObj = new URL(pageUrl);
          const pathname = urlObj.pathname; // "/tags/"
          let cleanPath = pathname.replace(/[\/\\]/g, '');

          // Take a screenshot of the URL using Puppeteer.
          if (cleanPath === '') {
            cleanPath = 'index';
          }
          screenshotCounter++;
          const screenshotPath = path.join(screenshotDir, `screenshot_${screenshotCounter}_${cleanPath}.png`);
          try {
            const page = await browser.newPage();
            await page.setViewport({ width: 1080, height: 1024 });
            console.log(`Taking screenshot of ${pageUrl}`);
            await page.goto(pageUrl, { waitUntil: 'networkidle0' });
            await page.screenshot({ path: screenshotPath, fullPage: true });
            await page.close();
            console.log(`Screenshot saved to ${screenshotPath}`);
          } catch (err) {
            console.error(`Error taking screenshot of ${pageUrl}:`, err);
          }
        }
      } else {
        console.log('Unknown XML format.');
      }
    } catch (error) {
      console.error(`Error processing sitemap ${url}:`, error);
    }
  }

  // Starting URL for your sitemap index.
  const startingSitemap = 'http://localhost:1313/sitemap_hugo.xml';
  const browser = await puppeteer.launch();

  // Begin processing recursively.
  await processSitemap(startingSitemap, browser);
  
  await browser.close();
})();
