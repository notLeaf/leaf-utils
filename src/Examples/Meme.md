# 🐸 Meme

```js
const { Meme } = require("leaf-utils");

await Meme({
    message: message,
    slash_command: false,
    footer: true,
    time: 300000,
    label: {
        firstlabel: "Next Meme",
        secondlabel: "Stop",
    },
    emojis: {
        firstbutton: "↪️",
        secondbutton: "🛑",
    },
    colors: {
        firstbutton: "PRIMARY",
        secondbutton: "DANGER",
    },
    embedColor: "RANDOM",
    authorOnly: "Only <@{{author}}> can use these buttons!",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
