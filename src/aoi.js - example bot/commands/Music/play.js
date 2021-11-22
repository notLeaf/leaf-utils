module.exports = {
    name: "play",
    aliases: 'p',
    usage: "play [song name/URL]",
    description: "Plays the given song",
    category: "Music",
    code: `$djsEval[(async () => {
const channel = message.member.voice.channel;
const song = args.join(" ")
const role = message.guild.roles.cache.find(role => role.name == "🎧 DJ")

if (!role) {
    return message.reply("To use my music commands you have to create a role called \`🎧 DJ\`")
} else if (!channel) {
    return message.reply("Join a voice channel")
} else if (channel.guild.me.voice.channel && channel.guild.me.voice.channel.id != channel.id) {
    return message.reply("Join my Voice Channel")
} else if (!song) {
    return message.reply("Type a song name")
}
try {
    client.distube.playVoiceChannel(channel, song, {
        member: message.member,
        textChannel: message.channel
    })
    message.react('✅')
} catch (e) {
    message.reply('An error has occured')
}
})()]`
}