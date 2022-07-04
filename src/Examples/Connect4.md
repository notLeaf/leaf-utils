# 🟡 Connect4

```js
const { Connect4 } = require("leaf-utils");

await Connect4({
    message: message,
    client: client,
    slash_command: false,
    time: 300000,
    opponent: message.mentions.users.first(),
    embed: {
        title: "Connect4",
        color: "RED",
    },
    challenge: {
        acceptButton: "Accept",
        denyButton: "Deny",
    },
    emojis: {
        player1: "🔴",
        player2: "🟡",
    },
    noUser: "You must mention someone",
    acceptMessage: "{{player}} has challenged you {{opponent}}",
    cancelMessage: "{{opponent}} refused to have a fight with you!",
    endMessage: "Challenge not accepted in time",
    timeoutMessage: "Game stopped due to inactivity",
    authorOnly: "You can't use these buttons",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
opponent: interaction.options.getUser('user')
```
