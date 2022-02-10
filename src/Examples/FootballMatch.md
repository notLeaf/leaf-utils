# ⚽ Football Match

```js
const { FootballMatch } = require('leaf-utils');

await FootballMatch({
            message: message,
            slash_command: false,
            embed: {
                title: 'Football Match',
                color: 'RED',
            },
            buttons: {
                left: 'Left',
                middle: 'Middle',
                right: 'Right',
            },
            emojis: {
                goalkeeper: '🧍‍♂️',
                goal: '🥅',
                soccer: '⚽',
            },
            winMessage: 'GG, <@{{winner}}> scored in **{{time}} seconds**.',
            loseMessage: '<@{{player}}> You lose',
            ongoingMessage: 'A game is already runnning in <#{{channel}}>. You cant start a new one',
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
```

## `/` Slash Commands
```js
message: interaction,
slash_command: true,
```