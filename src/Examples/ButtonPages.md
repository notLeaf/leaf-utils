# ➡️ Button Pagination

```js
const { ButtonPages } = require('leaf-utils');

        const page1 = new Discord.MessageEmbed()
            .setTitle("First")
            .setColor('RANDOM')
            .setTimestamp()

        const page2 = new Discord.MessageEmbed()
            .setTitle("Second")
            .setColor('RANDOM')
            .setTimestamp()

        const page3 = new Discord.MessageEmbed()
            .setTitle("Third")
            .setColor('RANDOM')
            .setTimestamp()

        const pages = [page1, page2, page3]

        await ButtonPages({
            message: message,
            slash_command: false,
            embeds: pages,
            time: 300000, // how long before buttons get disabled in ms
            back: {
                label: ' ',
                style: 'PRIMARY',
                emoji: '⬅️',
            },
            next: {
                label: ' ',
                style: 'PRIMARY',
                emoji: '➡️',
            },
            authorOnly: 'Only <@{{author}}> can use this button!',
        })
```

## `/` Slash Commands
```js
message: interaction,
slash_command: true,
```
