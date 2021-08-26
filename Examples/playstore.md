# Playstore Command

## Example
```js
bot.command({
  name: "playstore",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');
const leaf = require('leaf-utils')

leaf.playstore(message, args, {
playstoreTitle: "Playstore Command", //Deafult: "Play Store"
playstoreDescription: "Info about this game", //Default: "Info about ${game}"
playstoreColor: "ORANGE" //Deafult: "RED"
})

})()]`
})
```
