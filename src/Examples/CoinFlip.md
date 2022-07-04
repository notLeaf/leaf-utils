# 🪙 CoinFlip

```js
const { CoinFlip } = require("leaf-utils");

await CoinFlip({
    message: message,
    slash_command: false,
    time: 300000, // time before the game ends in ms
    embed: {
        title: "Coinflip",
        color: "#FC7111",
    },
    buttons: {
        heads: "Heads",
        tails: "Tails",
    },
    colors: {
        heads: "DANGER",
        tails: "PRIMARY",
    },
    startMessage: "The coin is in the air Choose heads or tails below.",
    winMessage: "GG, <@{{winner}}> The coin landed on **{{result}}**",
    loseMessage: "<@{{player}}> You lose The coin landed on **{{result}}**",
    authorOnly: "Only <@{{author}}> can use these buttons",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
