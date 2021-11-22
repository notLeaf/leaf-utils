module.exports = (bot) => {
    const { MessageEmbed } = require("discord.js");
    const Discord = require("discord.js")

    //all functions
    module.exports.check_if_dj = check_if_dj;

    function check_if_dj(client, member, song) {
        if (!client) return false;
        var roleid = member.guild.roles.cache.find(role => role.name == "🎧 DJ")
        if (!roleid) return;
        if (String(roleid) == "") return false;
        var isdj = false;

        if (member.roles.cache.has(roleid.id)) isdj = true;
        if (!isdj && !member.permissions.has("ADMINISTRATOR") && song.user.id != member.id)
            return roleid.id
        else
            return false;
    }
}