module.exports = {
  name: "ping",
  code: `$djsEval[(async () => { 
    const {
    MessageEmbed
} = require('discord.js');
const embed = new MessageEmbed()
    .setDescription('Pinging')
    .setColor(message.guild.me.displayHexColor);
const msg = await message.channel.send({
    embeds: [embed]
});
const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp;

embed.setTitle('Pong! 🏓')
    .setDescription('')
    .addField('Latency', msg.createdTimestamp - timestamp + ' ms', true)
    .addField('API Latency', message.client.ws.ping + ' ms').setFooter(message.member.displayName, message.author.displayAvatarURL({
        dynamic: true
    }))
    .setTimestamp();
msg.edit({
    embeds: [embed]
})
    })()]`
} 