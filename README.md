[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## How it works

![Example Screenshot][example-screenshot]

Using [puppeteer-with-fingerprints](https://github.com/CheshireCaat/puppeteer-with-fingerprints), a plugin for the [puppeteer](https://github.com/puppeteer/puppeteer) framework that allows generating a browser with good and unique fingerprints, the browser will automatically create a Microsoft Account using real Italian names/surnames and real Italian words to make strong passwords. 
> Note: The Captcha must be completed manually, but thanks to the optimization of the bot, it is very simple.



### Built With
[![Node.js][Node.js-badge]][Node.js-url]
[![Puppeteer][Puppeteer-badge]][Puppeteer-url]



### Steps

- Going to Outlook Register.
- Putting a random email and names/surnames using real italian names.
- Putting a random password using real italian words.
- Putting a random birthday.
- Manual Captcha.
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
npm install puppeteer puppeteer-with-fingerprints fs
```



### Run

```sh
node app.js
```



## 🔧 Usage



### Proxy

Check line 11 if you want to use Proxies.



## ⚠️ Important

- Update Google Chrome to the latest version to have good quality account and easy captcha, just go to `chrome://settings/help` for check or update Chrome Version.
- The first time you run the code there will be created a folder called "data", inside there will be the entire browser so it's normal if it takes a little time, but its just for the first run.



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
[example-screenshot]: example.gif