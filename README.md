# Microsoft Account Creator

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

An automated tool for creating Microsoft accounts using realistic Italian data.

## 📖 Description

This project automates the creation of Microsoft accounts using [puppeteer-with-fingerprints](https://github.com/CheshireCaat/puppeteer-with-fingerprints), a plugin for the [puppeteer](https://github.com/puppeteer/puppeteer) framework. It generates accounts with realistic Italian names, surnames, and passwords, enhancing the authenticity of created accounts.

## ✨ Key Features

- Automatic generation of Microsoft accounts
- Use of real Italian names and surnames
- Creation of strong passwords using Italian words
- Option to add a recovery email
- Support for proxy usage

## 🛠 How It Works

![Example Screenshot][example-screenshot]

1. Navigate to the Outlook registration page
2. Input random Italian email, names, and surnames
3. Generate a random password using Italian words
4. Input a random birthday
5. Solve CAPTCHA (manual)
6. Optionally add a recovery email
7. Complete account creation

### Built With

[![Node.js][Node.js-badge]][Node.js-url]
[![Puppeteer][Puppeteer-badge]][Puppeteer-url]

## 🚀 Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- Google Chrome (latest version)

### Installation

```sh
# Clone the repository
git clone https://github.com/silvestrodecaro/microsoft-account-creator.git
cd microsoft-account-creator

# Install dependencies
npm install
```

### Running

```sh
node app.js
```

## 🔧 Configuration

### CAPTCHA

The automatic CAPTCHA solving feature is no longer supported. Following a removal request from the CAPTCHA provider previously included in this repository, I have decided to exclude any CAPTCHA solver from this project. Don't worry - you can easily solve the CAPTCHA manually when prompted during the account creation process.

### Proxy

To use a proxy:

1. Open the [`config.js`](config.js#L3) file
2. Set `USE_PROXY: true`
3. Edit proxy credentials as needed

### Recovery Email

To disable adding a recovery email:

1. Open the [`config.js`](config.js) file
2. Set `ADD_RECOVERY_EMAIL: false`

> Note: Disabling the recovery email is not recommended.

## ⚠️ Warnings

- Ensure you have the latest version of Google Chrome installed to ensure the best account quality and easier CAPTCHA solving.
- Using this tool may violate Microsoft's Terms of Service. Use at your own risk.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

## 📞 Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

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