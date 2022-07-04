# 🎮 Wordle

```js
const { Wordle } = require("leaf-utils");

await Wordle({
    message: message,
    slash_command: false,
    time: 300000,
    wordle: [
        "actor",
        "acute",
        "album",
        "adult",
        "agent",
        "alarm",
        "alert",
        "apple",
    ], // array of words
    embed: {
        title: "Wordle",
        color: "#F38E05",
    },
    invalidMessage: "This is not a valid word",
    shortMessage: "The provided word does not contain 5 characters",
    winMessage: "GG, You win",
    loseMessage: "Try again, the correct word was {{word}}",
    timeoutMessage: "Time is up",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
