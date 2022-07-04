# ❔ Trivia

```js
const { Trivia } = require("leaf-utils");

await Trivia({
    message: message,
    slash_command: false,
    time: 300000,
    difficulty: "easy", // easy, medium or hard
    embed: {
        title: "Trivia",
        description: "You have 1 minute to guess the answer",
        color: "#DF300B",
    },
    emojis: {
        one: "1️⃣",
        two: "2️⃣",
        three: "3️⃣",
        four: "4️⃣",
    },
    loadMessage: "I am thinking..",
    winMessage: "GG, You win. The answer was {{answer}}",
    loseMessage: "You lose. The answer was {{answer}}",
    authorOnly: "Only <@{{author}}> can use these buttons!",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
