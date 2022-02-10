# 🎰 Slots

```js
const { Slots } = require('leaf-utils');

await Slots({
            message: message,
            slash_command: false,
            time: 300000,
            embed: {
                title: 'Slot Machine',
                wincolor: '#16BD3B',
                losecolor: '#E53E16'
            },
            button: {
                label: 'Spin',
                style: 'DANGER',
                emoji: '↪️' // optional
            },
            winMessage: 'GG! You win',
            loseMessage: 'You lose.',
            authorOnly: 'Only <@{{author}}> can use this button!',
        })
```

## `/` Slash Commands
```js
message: interaction,
slash_command: true,
```