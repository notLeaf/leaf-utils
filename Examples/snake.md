# Snake Command

## Example
```js
bot.command({
  name: "snake",
  code: `$djsEval[(async () => {
const { SnakeGame } = require('leaf-utils');
const Discord = require('discord.js');

const LeafGame = new SnakeGame({ 
title: "Snake", //Deafult: Snake Game
 color: "RED", //Default: "#2F3136"
timestamp: false, 
gameOverTitle: "Game Over" //Default: "Game Over"
 });

LeafGame.newGame(message)
})()]`
})
```
