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

    await page.emulateTimezone('Africa/Bujumbura');

    await page.setDefaultTimeout(3600000)

    // Going to Outlook register page.
    await page.goto("https://outlook.live.com/owa/?nlp=1&signup=1");
    await page.waitForSelector('[name="MemberName"]')

    const names = fs.readFileSync('names.txt', 'utf8').split('\n');
    const randomFirstName = names[Math.floor(Math.random() * names.length)].trim();
    const randomLastName = names[Math.floor(Math.random() * names.length)].trim();
    const fullName = randomFirstName + randomLastName + Math.floor(Math.random() * 9999)

    // Random email.
    await page.type('input[name="MemberName"]', fullName);
    await page.keyboard.press('Enter');

    // Random password.
    const RandomPassword = generateRandomPassword();
    await page.waitForSelector('#Password')
    await page.type('input[name="Password"]', `${RandomPassword}!`);
    await page.keyboard.press('Enter');

    // Random name and surname.
    await page.waitForSelector('#FirstName')
    await page.type('input[name="FirstName"]', randomFirstName);
    await page.type('input[name="LastName"]', randomLastName);
    await page.keyboard.press('Enter');

    await page.waitForSelector('#BirthDateLabel');
    await timeout.setTimeout(1000);

    // Random birthday.
    await page.select('#BirthMonth', (Math.floor(Math.random() * 12) + 1).toString());
    await page.select('#BirthDay', (Math.floor(Math.random() * 28) + 1).toString());
    await page.type('#BirthYear', (Math.floor(Math.random() * 10) + 1990).toString());
    await page.keyboard.press('Enter');

    await page.waitForNavigation();
    await page.close();
    await browser.close();

    // Writes account's credentials on "accounts.txt".
    const account = `${fullName}@outlook.com` + ":" + `${RandomPassword}!`
    console.log(account);
    fs.writeFileSync('accounts.txt', `\n${account}`, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function generateRandomPassword() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    // Generate a random lowercase letter
    const randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];

    // Generate a random number
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    // Generate random characters to fill up the rest of the password
    let restOfPassword = '';
    const minLength = 15;
    const maxLength = 25; // Just to ensure randomness

    // If password length is less than 8, generate more characters
    const passwordLength = Math.max(minLength, Math.floor(Math.random() * maxLength));

    for (let i = 0; i < passwordLength - 2; i++) {
        const randomChar = Math.random() < 0.5 ? randomLowercaseLetter : randomNumber;
        restOfPassword += randomChar;
    }

    // Shuffle the rest of the password to ensure randomness
    restOfPassword = restOfPassword.split('').sort(() => Math.random() - 0.5).join('');

    // Concatenate the random lowercase letter, number, and the rest of the password
    const password = randomLowercaseLetter + randomNumber + restOfPassword;

    return password;
}

start()