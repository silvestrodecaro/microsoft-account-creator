const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer');
puppeteer.use(StealthPlugin())
const fs = require('fs');
const timeout = require("node:timers/promises");

// Page resolution, if you change anything you may have some errors, don't hesitate to try
const width = 1920
const height = 1080

async function start() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "", // How to find: Open chrome and go to chrome://version
        userDataDir: "", // How to find: Open chrome and go to chrome://version
        args: [
            `--window-size=${width},${height}`
        ],
        defaultViewport: {
            width,
            height
        }
    });
    const context = await browser.createBrowserContext();
    const page = await context.newPage()

    // await page.emulateTimezone('Africa/Bujumbura');

    await page.setDefaultTimeout(3600000)

    // Writes account's credentials on "accounts.txt".
    const accountsData = fs.readFileSync('accounts.txt', 'utf8');
    const firstLine = accountsData.trim().split('\n')[0]; // Get the first line
    const [email, password] = firstLine.split(':');
    const username = email.split('@')[0];

    // Going to Outlook register page.
    await page.goto("https://github.com/signup?source=login");
    await timeout.setTimeout(2000);
    await page.waitForSelector('#email');

    await page.type('#email', email);
    await timeout.setTimeout(500);
    await page.click('.signup-continue-button');

    await page.click('#password');
    await page.type('#password', password);
    await timeout.setTimeout(500);
    await page.focus('#password');
    await page.keyboard.press('Enter');
    await page.click('.signup-continue-button');

    await page.click('#login');
    await page.type('#login', username);
    await timeout.setTimeout(500);
    await page.focus('#login');
    await page.keyboard.press('Enter');
    await page.click('.signup-continue-button');

    await timeout.setTimeout(3000);
    await page.click('[data-continue-to="captcha-and-submit-container"]');
}

start()