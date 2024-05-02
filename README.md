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
