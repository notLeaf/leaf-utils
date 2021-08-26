# Coinflip Command

## Example
```js
bot.command({
  name: "cflip",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');

const leaf = require('leaf-utils')
leaf.coinflip(message, {
    startMessage: "Started the game", //Default: The coin is in the air... Choose heads or tails below.
    headsColor: "blurple",  //Default: "red"
    tailsColor: "red" //Default: "green"

})

})()]`
})
```
