const PlayerMap = new Map()
const Discord = require(`discord.js`);
const {
    MessageButton,
    MessageActionRow,
    MessageEmbed
} = require(`discord.js`);
const { 
  check_if_dj
} = require("./functions")
let songEditInterval = null;

module.exports = (bot) => {
    try {
        bot.distube
            .on(`playSong`, async (queue, track) => {
                try {
                    bot.guilds.cache.get(queue.id).me.voice.setDeaf(true).catch((e) => {
                        console.log(e.stack ? String(e.stack).grey : String(e).grey)
                    })
                } catch (error) {
                    console.log(error)
                }
                try {
                    var newQueue = bot.distube.getQueue(queue.id)
                    var newTrack = track;
                    var data = receiveQueueData(newQueue, newTrack)
                    
                    let currentSongPlayMsg = await queue.textChannel.send(data).then(msg => {
                        PlayerMap.set(`currentmsg`, msg.id);
                        return msg;
                    })

                    var collector = currentSongPlayMsg.createMessageComponentCollector({
                        filter: (i) => i.isButton() && i.user && i.message.author.id == bot.user.id,
                        time: track.duration > 0 ? track.duration * 1000 : 600000
                    });

                    let lastEdited = false;

                    try {
                        clearInterval(songEditInterval)
                    } catch (e) {}
                    songEditInterval = setInterval(async () => {
                        if (!lastEdited) {
                            try {
                                var newQueue = bot.distube.getQueue(queue.id)
                                var newTrack = newQueue.songs[0];
                                var data = receiveQueueData(newQueue, newTrack)
                                await currentSongPlayMsg.edit(data).catch((e) => {
                                    console.log(e.stack ? String(e.stack).grey : String(e).grey)
                                })
                            } catch (e) {
                                clearInterval(songEditInterval)
                            }
                        }
                    }, 10000)

                    collector.on('collect', async i => {
                        if(i.customId != `10` && check_if_dj(bot, i.member, bot.distube.getQueue(i.guild.id).songs[0])) {

                            return i.reply({
                                content: 'to use the buttons you need to:\nbe the author of the message\nhave a role called \`🎧 DJ\`\nhave administrator permissions',
                                ephemeral: true
                            });
                        }
                        lastEdited = true;
                        setTimeout(() => {
                            lastEdited = false
                        }, 7000)

                        //skip
                        if (i.customId == `1`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })

                            const queue = bot.distube.getQueue(i.guild.id);

                            if (!queue || !newQueue.songs || newQueue.songs.length == 0) {
                                return i.reply({
                                    content: `Nothing Playing yet`,
                                    ephemeral: true
                                })
                            }

                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })

                            if (!newQueue || !newQueue.songs || newQueue.songs.length <= 1) {

                                i.reply({
                                    content: 'No songs in queue, so I cant skip',
                                    ephemeral: true
                                })
                                return
                            }
                            await bot.distube.skip(i.guild.id)
                            i.reply({
                                content: '⏩ Skipping the song',
                                ephemeral: true
                            })
                        }
                        //stop
                        if (i.customId == `2`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })


                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })

                            var embed = new MessageEmbed().setColor('RANDOM')
                                .setTitle('Done')
                                .setDescription(`leaving the channel`);
                            currentSongPlayMsg.edit({
                                embeds: [embed],
                                components: []
                            }).catch((e) => {
                                console.log(e.stack ? String(e.stack).grey : String(e).grey)
                            })
                            clearInterval(songEditInterval);

                            await bot.distube.stop(i.guild.id)
                        }
                        //pause / resume
                        if (i.customId == `3`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })
                           
                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my Voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })
                            if (newQueue.playing) {
                                await bot.distube.pause(i.guild.id);
                                var data = receiveQueueData(bot.distube.getQueue(queue.id), newQueue.songs[0])
                                currentSongPlayMsg.edit(data).catch((e) => {
                                    console.log(e.stack ? String(e.stack).grey : String(e).grey)
                                })
                                i.reply({
                                    content: '⏺ Paused',
                                    ephemeral: true
                                })
                            } else {
                                
                                await bot.distube.resume(i.guild.id);
                                var data = receiveQueueData(bot.distube.getQueue(queue.id), newQueue.songs[0])
                                currentSongPlayMsg.edit(data).catch((e) => {
                                    console.log(e.stack ? String(e.stack).grey : String(e).grey)
                                })
                                i.reply({
                                    content: '▶️ Resumed',
                                    ephemeral: true
                                })
                            }
                        }

                        //Shuffle
                        if (i.customId == `5`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })

                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my Voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })

                            
                            await newQueue.shuffle()

                            i.reply({
                                content: '🔀 Shuffled',
                                ephemeral: true
                            })
                        }

                        //Songloop
                        if (i.customId == `6`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })

                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my Voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })

                            if (newQueue.repeatMode == 1) {
                                await newQueue.setRepeatMode(0)
                            } else {
                                await newQueue.setRepeatMode(1)
                            }
                            i.reply({
                                embeds: [new MessageEmbed()
                                    .setColor('RANDOM')
                                    .setTimestamp()
                                    .setTitle(`${newQueue.repeatMode == 1 ? `✅ Enabled`: `🛑 Disabled`}`)
                                    .setFooter(`By: ${member.user.tag}`, member.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ],
                                ephemeral: true
                            })
                            var data = receiveQueueData(bot.distube.getQueue(queue.id), newQueue.songs[0])
                            currentSongPlayMsg.edit(data).catch((e) => {
                                console.log(e.stack ? String(e.stack).grey : String(e).grey)
                            })
                        }

                        //Forward
                        if (i.customId == `8`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })

                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my Voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })
                            let seektime = newQueue.currentTime + 10;
                            if (seektime >= newQueue.songs[0].duration) seektime = newQueue.songs[0].duration - 1;
                            await newQueue.seek(Number(seektime))
                            collector.resetTimer({
                                time: (newQueue.songs[0].duration - newQueue.currentTime) * 1000
                            })
                            i.reply({
                                content: '⏩ Forwarded the song for 10 Seconds',
                                ephemeral: true
                            })
                            var data = receiveQueueData(bot.distube.getQueue(queue.id), newQueue.songs[0])
                            currentSongPlayMsg.edit(data).catch((e) => {
                                console.log(e.stack ? String(e.stack).grey : String(e).grey)
                            })
                        }

                        //Rewind
                        if (i.customId == `9`) {
                            let {
                                member
                            } = i;

                            const {
                                channel
                            } = member.voice

                            if (!channel)
                                return i.reply({
                                    content: `Please join a Voice Channel first`,
                                    ephemeral: true
                                })

                            if (channel.id !== newQueue.voiceChannel.id)
                                return i.reply({
                                    content: `Please join my Voice Channel first! You are in <#${channel.id}>`,
                                    ephemeral: true
                                })
                            let seektime = newQueue.currentTime - 10;
                            if (seektime < 0) seektime = 0;
                            if (seektime >= newQueue.songs[0].duration - newQueue.currentTime) seektime = 0;
                            await newQueue.seek(Number(seektime))
                            collector.resetTimer({
                                time: (newQueue.songs[0].duration - newQueue.currentTime) * 1000
                            })
                            i.reply({
                                content: '⏪ Rewinded the song for 10 Seconds',
                                ephemeral: true
                            })
                            var data = receiveQueueData(bot.distube.getQueue(queue.id), newQueue.songs[0])
                            currentSongPlayMsg.edit(data).catch((e) => {
                                console.log(e.stack ? String(e.stack).grey : String(e).grey)
                            })
                        }
                    });
                } catch (error) {
                    console.error(error)
                }
            })
            .on(`addSong`, (queue, song) => queue.textChannel.send({
                embeds: [
                    new MessageEmbed()
                    .setColor('RANDOM')
                    .setFooter("Added by" + song.user.tag, song.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setTitle('Added to queue')
                    .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
                    .addField(`Queue Duration:`, `\`${queue.formattedDuration}\``)
                ]
            }))
            .on(`addList`, (queue, playlist) => queue.textChannel.send({
                embeds: [
                    new MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(playlist.thumbnail.url ? playlist.thumbnail.url : `https://images-ext-1.discordapp.net/external/bXzbdRKmp3DLdRXZ3ozRvvI8PH3ZsU1qZQ5qWS6pZ74/%3Fim%3DFitAndFill%2Cwidth%3D1200%2Cheight%3D1200/https/images.news18.com/ibnlive/uploads/2020/09/1601470124_untitled-design-24.jpg?width=596&height=596`)
                    .setDescription(`Playlist: [${playlist.name}](${playlist.url ? playlist.url : ""}) - \`${playlist.songs.length} Song${playlist.songs.length > 0 ? "s" : ""}\``)
                    .addField(`Queue Duration:`, `\`${queue.formattedDuration}\``)
                ]
            }))

            // DisTubeOptions.searchSongs = true
            .on(`searchResult`, (message, result) => {
                let i = 0
                message.channel.send(`Choose an option\n${result.map((song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join(`\n`)}\nType a number`)
            })
            .on("empty", queue => queue.textChannel.send({
                embeds: [new MessageEmbed().setColor("RED")
                    .setDescription(`Voice channel is empty, leaving the channel.`)
                ]
            }))
            .on(`searchCancel`, message => message.channel.send(`Searching canceled`).catch((e) => console.log(e)))
            .on(`error`, (channel, e) => {
                channel.send(`An error has occured: ${e}`).catch((e) => console.log(e))
                console.error(e)
            })
            .on(`searchNoResult`, message => message.channel.send(`No result found!`).catch((e) => console.log(e)))
            .on(`finishSong`, (queue, song) => {
                var embed = new MessageEmbed().setColor('RANDOM')
                    .setDescription(`${song.user.tag} Song ended`, song.user.displayAvatarURL({
                        dynamic: true
                    }));
                queue.textChannel.messages.fetch(PlayerMap.get(`currentmsg`)).then(currentSongPlayMsg => {
                    currentSongPlayMsg.edit({
                        embeds: [embed],
                        components: []
                    }).catch((e) => {
                        console.log(e.stack ? String(e.stack).grey : String(e).grey)
                    })
                }).catch((e) => {
                    console.log(e.stack ? String(e.stack).grey : String(e).grey)
                })
            })
            .on(`finish`, queue => {
                queue.textChannel.send({
                    embeds: [
                        new MessageEmbed().setColor('RANDOM')
                        .setDescription("There are no more songs left")
                        .setTimestamp()
                    ]
                })
            })
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }

    function receiveQueueData(newQueue, newTrack) {

        if (!newTrack) return new MessageEmbed().setColor('RED').setDescription("No Result")
        var embed = new MessageEmbed().setColor('RANDOM')
            .addField(`Duration:`, `\`${newQueue.formattedCurrentTime} / ${newTrack.formattedDuration}\``, true)
            .addField(`Queue:`, `\`${newQueue.songs.length} song(s)\`\n\`${newQueue.formattedDuration}\``, true)
            .addField(`Volume:`, `\`${newQueue.volume}%\``, true)
            .addField(`Filter${newQueue.filters.length > 0 ? "s": ""}:`, `${newQueue.filters && newQueue.filters.length > 0 ? `${newQueue.filters.map(f=>`\`${f}\``).join(`, `)}` : `🛑`}`, newQueue.filters.length > 1 ? false : true)
            .setTitle(`${newTrack.name}`, newTrack.url)
            .setFooter(`${newTrack.user.tag}`, newTrack.user.displayAvatarURL({
                dynamic: true
            }));
        let stop = new MessageButton().setStyle('DANGER').setCustomId('2').setLabel(`Leave`)
        let shuffle = new MessageButton().setStyle('PRIMARY').setCustomId('5').setLabel(`Shuffle`)
        let songloop = new MessageButton().setStyle('SUCCESS').setCustomId('6').setLabel(`Loop`)
        let skip = new MessageButton().setStyle('PRIMARY').setCustomId('1').setLabel(`Skip`)
        let pause = new MessageButton().setStyle('SECONDARY').setCustomId('3').setLabel(`Pause`)
        if (!newQueue.playing) {
            pause = pause.setStyle('SUCCESS').setLabel(`Resume`)
        }
        let forward = new MessageButton().setStyle('PRIMARY').setCustomId('8').setLabel(`+10 Sec`)
        let rewind = new MessageButton().setStyle('PRIMARY').setCustomId('9').setLabel(`-10 Sec`)
        if (newQueue.repeatMode === 0) {
            songloop = songloop.setStyle('SUCCESS')
        }
        if (newQueue.repeatMode === 1) {
            songloop = songloop.setStyle('SECONDARY')
        }
        if (newQueue.repeatMode === 2) {
            songloop = songloop.setStyle('SUCCESS')
        }
        if (Math.floor(newQueue.currentTime) < 10) {
            rewind = rewind.setDisabled()
        } else {
            rewind = rewind.setDisabled(false)
        }
        if (Math.floor((newTrack.duration - newQueue.currentTime)) <= 10) {
            forward = forward.setDisabled()
        } else {
            forward = forward.setDisabled(false)
        }
        const row = new MessageActionRow().addComponents([stop, shuffle, songloop, skip]);
        const row2 = new MessageActionRow().addComponents([pause, forward, rewind]);
        return {
            embeds: [embed],
            components: [row, row2]
        };
    }
}