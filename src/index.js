const { plugin } = require('puppeteer-with-fingerprints');
const fs = require("fs");
const config = require('./config');
const log = require('./Utils/log');
const recMail = require('./Utils/recMail');

async function start() {
  console.clear();

  log("Starting...", "green");

  log("Fetching Fingerprint...", "yellow");
  plugin.setServiceKey('');
  const fingerprint = await plugin.fetch({
    tags: ['Microsoft Windows', 'Chrome'],
  });

  log("Applying Fingerprint...", "yellow");
  plugin.useFingerprint(fingerprint);

  log("Fingerprint fetched and applied", "green");

  if (config.USE_PROXY) {
    log("Applying proxy settings...", "green");
    plugin.useProxy(`${config.PROXY_USERNAME}:${config.PROXY_PASSWORD}@${config.PROXY_IP}:${config.PROXY_PORT}`, {
      detectExternalIP: true,
      changeGeolocation: true,
      changeBrowserLanguage: true,
      changeTimezone: true,
      changeWebRTC: true,
    });
    log("Proxy settings applied", "green");
  }

  log("Launching browser...", "green");
  const browser = await plugin.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setDefaultTimeout(3600000);

  const viewport = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  }));
  log(`Viewport: [Width: ${viewport.width} Height: ${viewport.height}]`, "green");

  // Check if the viewport is bigger than the current resolution.
  const { getCurrentResolution } = await import("win-screen-resolution");
  if (viewport.width > getCurrentResolution().width || viewport.height > getCurrentResolution().height) {
    log("Viewport is bigger than the current resolution, restarting...", "red");
    await delay(5000);
    await page.close();
    await browser.close();
    start();
  }

  await createAccount(page);
  await page.close();
  await browser.close();
  process.exit(0);

}

async function createAccount(page) {
  // Going to Outlook register page.
  await page.goto("https://outlook.live.com/owa/?nlp=1&signup=1");
  await page.waitForSelector(SELECTORS.USERNAME_INPUT);

  // Generating Random Personal Info.
  const PersonalInfo = await generatePersonalInfo();

  // Username
  await page.type(SELECTORS.USERNAME_INPUT, PersonalInfo.username);
  await page.keyboard.press("Enter");

  // Password
  const password = await generatePassword();
  await page.waitForSelector(SELECTORS.PASSWORD_INPUT);
  await page.type(SELECTORS.PASSWORD_INPUT, password);
  await page.keyboard.press("Enter");

  // First Name and Last Name
  await page.waitForSelector(SELECTORS.FIRST_NAME_INPUT);
  await page.type(SELECTORS.FIRST_NAME_INPUT, PersonalInfo.randomFirstName);
  await page.type(SELECTORS.LAST_NAME_INPUT, PersonalInfo.randomLastName);
  await page.keyboard.press("Enter");

  // Birth Date.
  await page.waitForSelector(SELECTORS.BIRTH_DAY_INPUT);
  await delay(1000);
  await page.select(SELECTORS.BIRTH_DAY_INPUT, PersonalInfo.birthDay);
  await page.select(SELECTORS.BIRTH_MONTH_INPUT, PersonalInfo.birthMonth);
  await page.type(SELECTORS.BIRTH_YEAR_INPUT, PersonalInfo.birthYear);
  await page.keyboard.press("Enter");
  const email = await page.$eval(SELECTORS.EMAIL_DISPLAY, el => el.textContent);
  log("Please solve the captcha", "yellow");

  // Waiting for confirmed account.
  await page.waitForSelector(SELECTORS.DECLINE_BUTTON);
  log("Captcha Solved!", "green");
  await page.click(SELECTORS.DECLINE_BUTTON);
  await page.waitForSelector(SELECTORS.OUTLOOK_PAGE);

  if (config.ADD_RECOVERY_EMAIL) {
    await page.goto("https://account.live.com/proofs/Manage");

    // First verify.
    await page.waitForSelector(SELECTORS.RECOVERY_EMAIL_INPUT);
    const recoveryEmail = await recMail.getEmail();
    await page.type(SELECTORS.RECOVERY_EMAIL_INPUT, recoveryEmail.email);
    await page.keyboard.press("Enter");
    await page.waitForSelector(SELECTORS.EMAIL_CODE_INPUT);
    log("Waiting for Email Code... (first verify)", "yellow");
    firstCode = await recMail.getMessage(recoveryEmail);
    log(`Email Code Received! Code: ${firstCode}`, "green");
    await page.type(SELECTORS.EMAIL_CODE_INPUT, firstCode);
    await page.keyboard.press("Enter");
    await page.waitForSelector(SELECTORS.AFTER_CODE); // QUI STA IL PROBLEMA

    // Second verify.
    await page.click(SELECTORS.AFTER_CODE);
    await page.waitForSelector(SELECTORS.DOUBLE_VERIFY_EMAIL);
    await page.type(SELECTORS.DOUBLE_VERIFY_EMAIL, recoveryEmail.email);
    await page.keyboard.press("Enter");
    await page.waitForSelector(SELECTORS.DOUBLE_VERIFY_CODE);
    log("Waiting for Email Code... (second verify)", "yellow");
    secondCode = await recMail.getMessage(recoveryEmail);
    log(`Email Code Received! Code: ${secondCode}`, "green");
    await page.type(SELECTORS.DOUBLE_VERIFY_CODE, secondCode);
    await page.keyboard.press("Enter");
    await page.waitForSelector(SELECTORS.INTERRUPT_CONTAINER);

  }

  await writeCredentials(email, password);

}

async function writeCredentials(email, password) {
  // Writes account's credentials on "accounts.txt".
  const account = email + ":" + password;
  log(account, "green");
  fs.appendFile(config.ACCOUNTS_FILE, `\n${account}`, (err) => {
    if (err) {
      log(err, "red");
    }
  });
}

async function generatePersonalInfo() {
  const names = fs.readFileSync(config.NAMES_FILE, "utf8").split("\n");
  const randomFirstName = names[Math.floor(Math.random() * names.length)].trim();
  const randomLastName = names[Math.floor(Math.random() * names.length)].trim();
  const username = randomFirstName + randomLastName + Math.floor(Math.random() * 9999);
  const birthDay = (Math.floor(Math.random() * 28) + 1).toString()
  const birthMonth = (Math.floor(Math.random() * 12) + 1).toString()
  const birthYear = (Math.floor(Math.random() * 10) + 1990).toString()
  return { username, randomFirstName, randomLastName, birthDay, birthMonth, birthYear };
}

async function generatePassword() {
  const words = fs.readFileSync(config.WORDS_FILE, "utf8").split("\n");
  const firstword = words[Math.floor(Math.random() * words.length)].trim();
  const secondword = words[Math.floor(Math.random() * words.length)].trim();
  return firstword + secondword + Math.floor(Math.random() * 9999) + '!';
}

const SELECTORS = {
  USERNAME_INPUT: '#usernameInput',
  PASSWORD_INPUT: '#Password',
  FIRST_NAME_INPUT: '#firstNameInput',
  LAST_NAME_INPUT: '#lastNameInput',
  BIRTH_DAY_INPUT: '#BirthDay',
  BIRTH_MONTH_INPUT: '#BirthMonth',
  BIRTH_YEAR_INPUT: '#BirthYear',
  EMAIL_DISPLAY: '#userDisplayName',
  DECLINE_BUTTON: '#declineButton',
  OUTLOOK_PAGE: '#mainApp',
  RECOVERY_EMAIL_INPUT: '#EmailAddress',
  EMAIL_CODE_INPUT: '#iOttText',
  AFTER_CODE: '#idDiv_SAOTCS_Proofs_Section',
  DOUBLE_VERIFY_EMAIL: '#idTxtBx_SAOTCS_ProofConfirmation',
  DOUBLE_VERIFY_CODE: '#idTxtBx_SAOTCC_OTC',
  INTERRUPT_CONTAINER: '#interruptContainer'
};

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

start();
