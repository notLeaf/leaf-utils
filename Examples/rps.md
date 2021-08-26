# Rock, Paper, Scissors Command

## Example
```json
bot.command({
  name: "rps",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');

const leaf = require('leaf-utils') 
 leaf.rps(message, {
    rockEmoji: "🗻", //Default: "🗿"
    paperEmoji: "🗞️", //Default: "📰"
    scissorsEmoji: "✂️", //Default: "✂️"
    startMessage: "Started the game", //Default: "Rock Paper Scissors! \nHit a button below for your choice"
    rockButtonColor: "blurple", //Default: "red"
    paperButtonColor: "green", //Default: "grey"
    scissorsButtonColor: "red" //Default: "green"
})

})()]`
})
```