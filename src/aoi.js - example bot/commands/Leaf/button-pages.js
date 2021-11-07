module.exports = {
    name: "button-pages",
    code: `$djsEval[(async () => {
      const Discord = require('discord.js');
      const leaf = require('leaf-utils');
      
      let embed1 = new Discord.MessageEmbed()
          .setTitle('Page 1');
      
      let embed2 = new Discord.MessageEmbed()
          .setTitle('Page 2');
      
      let embed3 = new Discord.MessageEmbed()
          .setTitle('Page 3');
      
      let pages = [embed1, embed2, embed3]
      
      leaf.buttonpages(client, message, pages, {
          firstEmoji: '⏪',
          backEmoji: '◀️',
          delEmoji: '🗑️',
          forwardEmoji: '▶️',
          lastEmoji: '⏩',
      
          btncolor: 'PRIMARY',
          delcolor: 'DANGER',
          skipcolor: 'PRIMARY',
      
          skipBtn: true,
      })
})()]`
}