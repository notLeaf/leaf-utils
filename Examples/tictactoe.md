# TicTacToe Command

## Example
```json
bot.command({
  name: "tictactoe",
  code: `$djsEval[(async () => {
const Discord = require("discord.js");
const leaf = require("leaf-utils")

leaf.tictactoe(message, {
    xEmoji: "❌", //Default: ❌
    oEmoji: "⭕", //Default ⭕
    idleEmoji: "➖" //Default: ➖
})

})()]`
})
```