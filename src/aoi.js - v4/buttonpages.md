# Button pagination Command

## Example
```js
bot.command({
  name: "button-pagination",
  code: `$djsEval[(async () => {
const Discord = require('discord.js')
const leaf = require("leaf-utils");

let embed1 = new Discord.MessageEmbed()
.setTitle('Page 1')
.setDescription('page 1');

let embed2 = new Discord.MessageEmbed()
.setTitle('Page 2')
.setDescription('page 2');

let embed3 = new Discord.MessageEmbed()
.setTitle('Page 3')
.setDescription('page 3');

let pages = [embed1, embed2, embed3] 

leaf.buttonpages(client, message, pages, {
  firstEmoji: '⏪',
  backEmoji: '◀️', 
  delEmoji: '🗑️', 
  forwardEmoji: '▶️', 
  lastEmoji: '⏩',
  
  btncolor: 'green', 
  delcolor: 'red',
  skipcolor: 'blurple', 
   
  skipBtn: true,
})

})()]`
})
```
