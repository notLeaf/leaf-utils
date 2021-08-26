# Embed Pagination Command

## Example
```json
bot.command({
  name: "embed-pagination",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');
const leaf = require('leaf-utils');

const page1 = new Discord.MessageEmbed() 
    .setColor('RED');
    .setTitle('Page 1');
    .setDescription('Page 1')
 
const page2 = new Discord.MessageEmbed()
    .setColor('GREEN');
    .setTitle('Page 2');
    .setDescription('Page 2')
 
const page3 = new Discord.MessageEmbed() 
    .setColor('ORANGE');
    .setTitle('Page 3');
    .setDescription('Page 3')

//Settings
const pages = [ 
    page1,
    page2,
    page3
  ]
 
const emojiList = ['⏪', '◀️', '⏹️', '▶️', '⏩'] 
const timeout = '300000'
 
leaf.paginate(msg, pages, emojiList, timeout);
})()]`
})
```