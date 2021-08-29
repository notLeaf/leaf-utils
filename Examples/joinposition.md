# Join Position Command

## Example
```js
bot.command({
  name: "join-position",
  code: `$djsEval[(async () => {
        const Discord = require('discord.js')
const leaf = require("leaf-utils");

leaf.JoinPosition(message, args)

})()]`
})
```
