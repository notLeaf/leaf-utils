module.exports = {
    name: "button-pages",
    category: 'Leaf',
    code: `$djsEval[(async () => {
  const { Leafbutton } = require('leaf-utils');
  const Discord = require('discord.js');
  
  const page1 = new Discord.MessageEmbed()
  .setTitle("Home")
  .setFooter(message.member.displayName, message.author.displayAvatarURL({
      dynamic: true
  }))
  .setColor('RED')
  .setTimestamp()

const page2 = new Discord.MessageEmbed()
  .setTitle("Second")
  .setFooter(message.member.displayName, message.author.displayAvatarURL({
      dynamic: true
  }))
  .setColor('RED')
  .setTimestamp()

const page3 = new Discord.MessageEmbed()
  .setTitle("Third")
  .setFooter(message.member.displayName, message.author.displayAvatarURL({
      dynamic: true
  }))
  .setColor('RED')
  .setTimestamp()

const pages = [page1, page2, page3]

await Leafbutton({
  message: message,
  embeds: pages,
  back: {
      label: '⏪ Back',
      style: 'PRIMARY',
  },
  home: {
      label: '🏠 Home',
      style: 'SUCCESS',
  },
  forward: {
      label: 'Next ⏩',
      style: 'DANGER',
  },
  time: 300000,
  setDisabled: true,
  othersMessage: 'Only <@{{author}}> can use buttons'
})
  })()]`
  }