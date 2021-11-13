module.exports = {
    name: "help",
    aliases: 'h',
    usage: "help [command]",
    description: "Displays a list of all current commands",
    category: "Info",
    code: `$djsEval[const Discord = require('discord.js');
    if ('$message' === '') {
        const cmds = client.cmd.default;
        const embed = new d.embed();
        const types = new Set(cmds.map(x => x.category))
        types.forEach(x => {
            embed.addField("\`Category: " + x + "\`", cmds.filter(y => y.category === x).map(x => x.name).join(", "))
        })
        embed.setAuthor('Help Command', message.client.user.avatarURL({
            dynamic: true
        }))
        embed.setDescription('Type \`$getservervar[prefix]help [command]\` to get more info')
        embed.setThumbnail(message.guild.iconURL({ 
            dynamic: true 
        }))
        embed.setFooter(message.member.displayName, message.author.displayAvatarURL({
            dynamic: true
        }))
        embed.setTimestamp()
        embed.setColor('RED')

        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setURL('https://github.com/notLeaf/leaf-utils')
                .setStyle('LINK')
                .setLabel('Github'),
                new Discord.MessageButton()
                .setURL('https://discord.gg/yfD2Vmnr6F')
                .setStyle('LINK')
                .setLabel('Server')
            )

        channel.send({
            embeds: [embed],
            components: [row]
        })
    } else {
        const cmd = client.cmd.default.find((c) => c.name.toLowerCase() === '$message'.toLowerCase() || c.aliases && c.aliases.includes('$message'.toLowerCase()));

        if (!cmd) channel.send('⛔ This command does not exist')
        else {


            const embed2 = new d.embed()
            embed2.setTitle(cmd.name ? cmd.name + ' command' : "No name for this command.")
            embed2.setDescription(cmd.description ? "\`" + cmd.description + "\`" : "No description for this command.")
            embed2.addField("Usage:", cmd.usage ? "\`" + '$getservervar[prefix]' + cmd.usage + "\`" : "\`" + '$getservervar[prefix]' + cmd.name + "\`")
            embed2.addField("Category:", cmd.category ? "\`" + cmd.category + "\`" : "No category for this command.")
            embed2.addField("Aliases:", cmd.aliases ? "\`" + cmd.aliases + "\`" : "No aliases for this command.")
            embed2.setFooter(message.member.displayName, message.author.displayAvatarURL({
                dynamic: true
            }))
            embed2.setTimestamp()
            embed2.setColor('RED')

            const row2 = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setURL('https://discord.gg/yfD2Vmnr6F')
                    .setStyle('LINK')
                    .setLabel('Server')
                )

            channel.send({
                embeds: [embed2],
                components: [row2]
            })
  }    
  }
  ]`
  }