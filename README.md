<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/yfD2Vmnr6F"><img src="https://media.discordapp.net/attachments/803008441298976867/880518000309059686/leaf-utils.png?width=1395&height=322" width="546" alt="leaf-utils" /></a>
  </p>
  <br />
  <p>

[![discordBadge](https://img.shields.io/badge/Chat-Coding%20Planet-7289d9?style=for-the-badge&logo=discord)](https://discord.gg/yfD2Vmnr6F)
[![downloadsBadge](https://img.shields.io/npm/dt/leaf-utils?style=for-the-badge)](https://npmjs.com/leaf-utils)
[![versionBadge](https://img.shields.io/npm/v/leaf-utils?style=for-the-badge)](https://npmjs.com/leaf-utils)
  <br>
  
  </p>
</div>

## ✨ About

Leaf-utils is a **simple package** to code with ease.


## ⚙️ Installation

**Node.js 16.6.0 or newer is required.**  

```sh-session
npm install leaf-utils
```


## 📗 Usage

```js
const { TicTacToe } = require('leaf-utils');

await TicTacToe({
            message: message,
            slash_command: false,
            time: 300000,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Tic Tac Toe',
                color: 'RED'
            },
            challenge: {
                acceptButton: 'Accept',
                denyButton: 'Deny',
            },
            emojis: {
                xEmoji: '❌',
                oEmoji: '🔵',
            },
            colors: {
                xEmoji: 'DANGER',
                oEmoji: 'PRIMARY',
            },
            noUser: 'You must mention someone',
            acceptMessage: '{{player}} has challenged you {{opponent}}',
            cancelMessage: '{{opponent}} refused to have a fight with you!',
            endMessage: 'Challenge not accepted in time',
            authorOnly: 'You can\'t use these buttons',
        })
```


## ✏️ Examples
If you are looking for examples check **[My GitHub](https://github.com/notLeaf/leaf-utils)**


## ❔ Help

If you need help, please don't hesitate to join our [Discord Server](https://discord.gg/yfD2Vmnr6F).


## 🔗 Links

- [Youtube](https://www.youtube.com/channel/UC9yRVadElzxSO3ZUywK6Yig) - My `Youtube Channel`
- [Discord Server](https://discord.gg/yfD2Vmnr6F) - My `Discord Server`
- [GitHub](https://github.com/notLeaf/leaf-utils) - Leaf-utils `Github`
