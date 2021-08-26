# Hangman Command

## Example
```json
bot.command({
  name: "hangman",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');
const { hangman } = require('leaf-utils');

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission')

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel')
        
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')

        //Game
        const LeafHangman = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        LeafHangman.start();
})()]`
})
```