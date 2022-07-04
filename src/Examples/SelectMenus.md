# 📜 Select Menus

```js
const { SelectMenus } = require("leaf-utils");

const pages = [{ title: "Page 1" }, { title: "Page 2" }, { title: "Page 3" }],
    options = [
        {
            label: "Page 1",
            emoji: "1️⃣",
        },
        {
            label: "Page 2",
            emoji: "2️⃣",
        },
        {
            label: "Page 3",
            emoji: "3️⃣",
        },
    ];

await SelectMenus({
    message: message,
    slash_command: false,
    time: 300000,
    pages: pages,
    options: options,
    authorOnly: {
        enabled: true,
        ephemeral: true,
        authorMessage: "Only <@{{author}}> can use this menu",
    },
    placeholder: "Dropdown Menu",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
