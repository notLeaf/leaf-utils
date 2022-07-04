# 🔎 NPM Search

```js
const { NPMSearch } = require("leaf-utils");

await NPMSearch({
    message: message,
    slash_command: false,
    args: args,
    embedColor: "#FCAD11",
    query: "Give me a package name to search",
    noResult: "I can't find this package",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
```
