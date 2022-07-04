# 🧩 Rock Paper Scissors

```js
const { RockPaperScissors } = require("leaf-utils");

await RockPaperScissors({
    message: message,
    slash_command: false,
    time: 300000,
    embed: {
        title: "Rock Paper Scissors",
        description:
            "You have 5 minutes to beat the bot. **Get 3 points to win**",
        color: "#F5790D",
    },
    emojis: {
        rock: "🪨",
        paper: "📰",
        scissors: "✂️",
    },
    colors: {
        rock: "PRIMARY",
        paper: "DANGER",
        scissors: "SUCCESS",
    },
    winMessage: "{{user}} You won",
    loseMessage: "{{user}} You lose. The Bot wins",
    tieMessage: "Time is up. It's a tie",
    chooseMessage: "You choose",
    botMessage: "Bot chooses",
    ongoingMessage: "You already have a game in progress",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
