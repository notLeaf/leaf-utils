# 🎮 Tic-Tac-Toe

```js
const { TicTacToe } = require("leaf-utils");

await TicTacToe({
    message: message,
    slash_command: false,
    time: 300000,
    opponent: message.mentions.users.first(),
    embed: {
        title: "Tic Tac Toe",
        color: "RED",
    },
    challenge: {
        acceptButton: "Accept",
        denyButton: "Deny",
    },
    emojis: {
        xEmoji: "❌",
        oEmoji: "🔵",
    },
    colors: {
        xEmoji: "DANGER",
        oEmoji: "PRIMARY",
    },
    noUser: "You must mention someone",
    acceptMessage: "{{player}} has challenged you {{opponent}}",
    cancelMessage: "{{opponent}} refused to have a fight with you!",
    endMessage: "Challenge not accepted in time",
    authorOnly: "You can't use these buttons",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
opponent: interaction.options.getUser('user')
```
