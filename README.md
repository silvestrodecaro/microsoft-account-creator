[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Microsoft/Outlook Account Creator
A fast and secure bot that creates Microsoft accounts.

## Getting Started
The bot using the Puppeteer library that allows browser automation will perform all the steps written in the code that will allow the creation of Microsoft Accounts using REAL Italian Names/Surnames and REAL Italian words to make good passwords.
I ran a lot of tests to know what is the best way to make the bot "less bot" possible (user agents, fingerprints, devices) but what I wrote in the code seems to be the best optimized form that can be created.
The Captcha must be done manually but thanks to the optimization of the bot it is very simple.

## IMPORTANT
1. Update Google Chrome to the latest version to have good quality account and easy captcha, just go to chrome://settings/help for check or update Chrome Version.
2. The first time you run the code there will be created a folder called "data", inside there will be the entire browser so it's normal if it takes a little time, but its just for the first run.

### Steps

- Going to Outlook Register.
- Putting a random email and names/surnames using real italian names.
- Putting a random password using real italian words.
- Putting a random birthday.
- Manual Captcha.
- Account Done.

### Prerequisites
```sh
npm init -y
npm install puppeteer puppeteer-with-fingerprints fs
```

### Run
```sh
node app.js
```

## Proxy
Check line 11 if you want to use Proxies.

[contributors-shield]: https://img.shields.io/github/contributors/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[contributors-url]: https://github.com/silvestrodecaro/microsoft-account-creator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[forks-url]: https://github.com/silvestrodecaro/microsoft-account-creator/network/members
[stars-shield]: https://img.shields.io/github/stars/silvestrodecaro/microsoft-account-creator?style=for-the-badge
[stars-url]: https://github.com/silvestrodecaro/microsoft-account-creator/stargazers
[issues-shield]: https://img.shields.io/github/issues/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[issues-url]: https://github.com/silvestrodecaro/microsoft-account-creator/issues
[license-shield]: https://img.shields.io/github/license/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[license-url]: https://github.com/silvestrodecaro/microsoft-account-creator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/silvestro-decaro