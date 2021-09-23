# First Message Command

## Example
```js
bot.command({
  name: "first",
  code: `$djsEval[(async () => {
const Discord = require("discord.js");
const leaf = require("leaf-utils")

leaf.firstmessage(message)

})()]`
})
```
