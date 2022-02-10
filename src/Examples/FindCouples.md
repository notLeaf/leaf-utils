# 👫 Find Couples

```js
const { FindCouples } = require('leaf-utils');

await FindCouples({
            message: message,
            slash_command: false,
            time: 300000,
            embed: {
                title: 'Match the Couples',
                color: '#F5790D',
            },
            colors: {
                correct: 'SUCCESS',
                middle: 'PRIMARY',
                wrong: 'DANGER',
            },
            winMessage: 'Congrats {{user}}! You win.',
            endMessage: 'Time is up! Game stopped due to inactivity.',
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
```

## `/` Slash Commands
```js
message: interaction,
slash_command: true,
```