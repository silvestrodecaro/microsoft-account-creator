# Microsoft Account Creator
by placeboaio

## Getting Started
The bot using the Puppeteer library that allows browser automation will perform all the steps written in the code that will allow the creation of a Microsoft Account using REAL Italian Names/Surnames and REAL Italian words to make good passwords.
I ran a lot of tests to know what is the best way to make the bot "less bot" possible (user agents, fingerprints, devices) but what I wrote in the code seems to be the best optimized form that can be created.
The Captcha must be done manually but thanks to the optimization of the bot it is a very simple 1/2 captcha.

## IMPORTANT
Update Google Chrome to the latest version to have good quality account and easy captcha.
Just go to chrome://settings/help for update or check Chrome Version.

### Steps

- Accepting Google Cookies.
- Going to Outlook Register Page manualy.
- Putting a random email and names/surnames using real italian names.
- Putting a random password using real italian words.
- Putting a random Birth Day.
- Manual Captcha.
- Account Done.

### Prerequisites?
```
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth fs
```

Insert executablePath and userDataDir on lines 14 and 15.

## Proxy
If you want to use proxies its very simple, just put these lines of code

```
'--proxy-server=ip:port'
```
under line 17 (dont forget the comma)
and
```
await page.authenticate({
            username: "username",
            password: "password"
        })
```
under line 25.