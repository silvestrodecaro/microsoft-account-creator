[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## How it works

![Example Screenshot][example-screenshot]

Using [puppeteer-with-fingerprints](https://github.com/CheshireCaat/puppeteer-with-fingerprints), a plugin for the [puppeteer](https://github.com/puppeteer/puppeteer) framework that allows generating a browser with good and unique fingerprints, the browser will automatically create a Microsoft Account using real Italian names/surnames and real Italian words to make strong passwords. 
> Note: The first time you run the code there will be created a folder called "data", inside there will be the entire browser so it's normal if it takes a little time, but its just for the first run.



### Built With
[![Node.js][Node.js-badge]][Node.js-url]
[![Puppeteer][Puppeteer-badge]][Puppeteer-url]



### Steps

- Going to Outlook Register.
- Putting a random email and names/surnames using real italian names.
- Putting a random password using real italian words.
- Putting a random birthday.
- Captcha.
- Account Done.



## 🚀 Getting Started



### Installation

```sh
# Open a terminal

# Clone the repository
git clone https://github.com/silvestrodecaro/microsoft-account-creator.git
cd microsoft-account-creator

# Install dependencies
npm init -y
npm i
```



### Run

```sh
node app.js
```



## 🔧 Usage



### Captcha

Currently, the automatic Captcha solving feature is no longer supported. After a request of remove from the Captcha provider that I included in this repo, I have decided not to include a Captcha solver in this project. Don't worry, you can easily solve the captcha manually.


### Proxy

If you want to use proxies go to `config.js` file, set USE_PROXY (default: false) to true and your proxy credentials.


### Recovery Email

If you DON'T want a recovery email added to the account when it is created go to [`config`](config.js?plain=2) file and set ADD_RECOVERY_EMAIL (default: true) to false.
> (Not recommended).



## ⚠️ Important

Update Google Chrome to the latest version to have good quality account and easy captcha, just go to `chrome://settings/help` for check or update Chrome Version.



## 📃 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.



[contributors-shield]: https://img.shields.io/github/contributors/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[contributors-url]: https://github.com/silvestrodecaro/microsoft-account-creator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[forks-url]: https://github.com/silvestrodecaro/microsoft-account-creator/network/members
[stars-shield]: https://img.shields.io/github/stars/silvestrodecaro/microsoft-account-creator?style=for-the-badge
[stars-url]: https://github.com/silvestrodecaro/microsoft-account-creator/stargazers
[issues-shield]: https://img.shields.io/github/issues/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[issues-url]: https://github.com/silvestrodecaro/microsoft-account-creator/issues
[license-shield]: https://img.shields.io/github/license/silvestrodecaro/microsoft-account-creator.svg?style=for-the-badge
[license-url]: https://github.com/silvestrodecaro/microsoft-account-creator/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/silvestro-decaro
[Puppeteer-badge]: https://img.shields.io/badge/Puppeteer-40B5A4?logo=puppeteer&logoColor=fff&style=for-the-badge
[Puppeteer-url]: https://github.com/puppeteer/puppeteer
[Node.js-badge]: https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge
[Node.js-url]: https://nodejs.org
[example-screenshot]: /assets/example.gif