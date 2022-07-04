# 🐍 Snake

```js
const { Snake } = require("leaf-utils");

new Snake({
    message: message,
    slash_command: false,
    snake: {
        head: "🟢",
        body: "🟩",
        tail: "🟢",
        over: "💀",
    },
    emojis: {
        board: "⬛",
        food: "🍎",
        up: "⬆️",
        right: "➡️",
        down: "⬇️",
        left: "⬅️",
    },
    foods: ["🍎", "🍇", "🍊", "🍕", "🥕", "🥞"],
    stopButton: {
        stopLabel: "Stop",
        stopStyle: "DANGER",
    },
    authorOnly: "Only {{author}} can use these buttons",
}).startGame();
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
