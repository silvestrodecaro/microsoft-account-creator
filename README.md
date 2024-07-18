# Microsoft/Outlook Account Creator
A fast and secure bot that creates Microsoft accounts.

## Getting Started
The bot using the Puppeteer library that allows browser automation will perform all the steps written in the code that will allow the creation of Microsoft Accounts using REAL Italian Names/Surnames and REAL Italian words to make good passwords.
I ran a lot of tests to know what is the best way to make the bot "less bot" possible (user agents, fingerprints, devices) but what I wrote in the code seems to be the best optimized form that can be created.
The Captcha must be done manually but thanks to the optimization of the bot it is very simple.

## IMPORTANT
Update Google Chrome to the latest version to have good quality account and easy captcha.
Just go to chrome://settings/help for update or check Chrome Version.

### Steps

- Going to Outlook Register.
- Putting a random email and names/surnames using real italian names.
- Putting a random password using real italian words.
- Putting a random birthday.
- Manual Captcha.
- Account Done.

### Prerequisites
```
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth fs
```
Insert executablePath and userDataDir on lines 14 and 15 (Not required, but it might help you with captchas).

### Run
```
node app.js
```

## Proxy
Check line 19 and 29 if you want to use Proxies.

## 718/24 - Update

This README provides a comprehensive overview of the Microsoft/Outlook Account Creator bot, which utilizes Puppeteer for browser automation to create Microsoft accounts. Below is a slightly refined version of your README for clarity and completeness.

---

# Microsoft/Outlook Account Creator
A fast and secure bot that creates Microsoft accounts.

## Getting Started
This bot uses the Puppeteer library for browser automation to perform all the steps required to create Microsoft accounts. It uses **real Italian names/surnames** and **real Italian words** to generate strong passwords. The bot has been optimized through extensive testing to minimize bot detection by using appropriate user agents, fingerprints, and device configurations. While captchas must be completed manually, the bot's optimizations make this process straightforward.

## IMPORTANT
To ensure high-quality accounts and easier captcha completion, update Google Chrome to the latest version. You can check for updates by navigating to `chrome://settings/help` in your browser.

### Features
- Navigate to the Outlook registration page.
- Generate and input random email addresses, names, and surnames using real Italian data.
- Generate and input strong passwords using real Italian words.
- Input random birthdates.
- Manual captcha completion.
- Completion of account creation.

### Prerequisites
Install the necessary dependencies:
```sh
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth fs
```

Insert `executablePath` and `userDataDir` in the script (lines 14 and 15) to potentially improve captcha handling. These are optional but recommended.

### How to Run
Execute the script using Node.js:
```sh
node app.js
```

### Proxy Configuration
If you need to use proxies, check and edit lines 19 and 29 in the script accordingly.

---

### Example Script Usage
Here's how you might set the `executablePath` and `userDataDir` in your script:

```javascript
const browser = await puppeteer.launch({
  headless: false,
  executablePath: "/path/to/chrome", // Replace with the path to your Chrome executable
  userDataDir: "/path/to/user/data", // Replace with the path to your user data directory
  args: [
    `--window-size=${width},${height}`,
    `--incognito`,
  ],
  defaultViewport: { width, height },
});
```

### Manual Captcha Handling
The script pauses for manual captcha input at the necessary step. Ensure you are available to complete the captcha promptly to avoid timeouts.

### Additional Notes
- Regularly update the bot and dependencies to ensure compatibility and efficiency.
- Always use the bot ethically and in compliance with the terms of service of the target website.

##Contact
If you have any questions or need further assistance, feel free to reach out!
