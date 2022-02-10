# ⭐ Would You Rather

```js
const { WouldYouRather } = require('leaf-utils');

await WouldYouRather({
            message: message,
            slash_command: false,
            time: 300000,
            embed: {
              title: 'Would You Rather',
              color: '#F5790D',
            },
            emojis: {
              firstbutton: '1️⃣',
              secondbutton: '2️⃣',
            },
            colors: {
              firstbutton: 'SUCCESS',
              secondbutton: 'SUCCESS',
            },
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
```

## `/` Slash Commands
```js
message: interaction,
slash_command: true,
```