const { plugin } = require('puppeteer-with-fingerprints');
const fs = require("fs");

async function start() {

  const fingerprint = await plugin.fetch('', {
    tags: ['Microsoft Windows', 'Chrome'],
  });
  plugin.useFingerprint(fingerprint);

  /* If you want to use a proxy, uncomment the following lines and replace the proxy with your own.
  plugin.useProxy(`username:password@ip:port`, {
    detectExternalIP: true,
    changeGeolocation: true,
    changeBrowserLanguage: true,
    changeTimezone: true,
    changeWebRTC: true,
  });
  */

  const browser = await plugin.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setDefaultTimeout(3600000);

  await createAccount(page);

  await page.close();
  await browser.close();
  process.exit(0);

}

async function createAccount(page) {

  // Going to Outlook register page.
  await page.goto("https://outlook.live.com/owa/?nlp=1&signup=1");
  await page.waitForSelector('#usernameInput');

  // Random username.
  const names = fs.readFileSync("names.txt", "utf8").split("\n");
  const randomFirstName = names[Math.floor(Math.random() * names.length)].trim();
  const randomLastName = names[Math.floor(Math.random() * names.length)].trim();
  const username = randomFirstName + randomLastName + Math.floor(Math.random() * 9999);
  await page.type('#usernameInput', username);
  await page.keyboard.press("Enter");

  // Random password.
  const words = fs.readFileSync("words5char.txt", "utf8").split("\n");
  const firstword = words[Math.floor(Math.random() * words.length)].trim();
  const secondword = words[Math.floor(Math.random() * words.length)].trim();
  const RandomPassword = firstword + secondword + '!';
  await page.waitForSelector("#Password");
  await page.type('input[name="Password"]', RandomPassword);
  await page.keyboard.press("Enter");

  // Random name and surname.
  await page.waitForSelector("#firstNameInput");
  await page.type('#firstNameInput', randomFirstName);
  await page.type('#lastNameInput', randomLastName);
  await page.keyboard.press("Enter");

  // Random birthday.
  await page.waitForSelector("#BirthDay");
  await delay(1000);
  await page.select(
    "#BirthMonth",
    (Math.floor(Math.random() * 12) + 1).toString()
  );
  await page.select(
    "#BirthDay",
    (Math.floor(Math.random() * 28) + 1).toString()
  );
  await page.type(
    "#BirthYear",
    (Math.floor(Math.random() * 10) + 1990).toString()
  );
  await page.keyboard.press("Enter");
  const email = await page.$eval("#userDisplayName", el => el.textContent);

  // Wait for confirmed account.
  await page.waitForSelector("#declineButton");
  await page.click("#declineButton");
  await page.waitForSelector("#mainApp");

  await writeCredentials(email, RandomPassword);

}

async function writeCredentials(email, password) {

  // Writes account's credentials on "accounts.txt".
  const account = email + ":" + password;
  console.clear();
  console.log(account);
  fs.appendFile("accounts.txt", `\n${account}`, (err) => {
    if (err) {
      console.log(err);
    }
  });

}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

start();
