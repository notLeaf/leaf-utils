# 🧮 Calculator

```js
const { Calculator } = require("leaf-utils");

await Calculator({
    message: message,
    slash_command: false,
    time: 300000,
    embed: {
        title: "Calculator",
        color: "#FF5733",
    },
    invalidQuery: "The provided equation is not valid",
    authorOnly: "Only <@{{author}}> can use these buttons!",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
