# 🟧 Flood

```js
const { Flood } = require('leaf-utils');

await Flood({
            message: message,
            slash_command: false,
            time: 300000,
            difficulty: 13,
            embed: {
                title: 'Flood',
                color: '#FFAE0E'
            },
            emojis: {
                redsquare: '🟥',
                bluesquare: '🟦',
                yellowsquare: '🟨',
                greensquare: '🟩',
                purplesquare: '🟪',
                style: 'SECONDARY',
            },
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
```

## Difficulty
```js
easy mode ➔ 7
medium mode ➔ 9
hard mode ➔ 11
impossible ➔ 13 (default)
```

## `/` Slash Commands
```js
const { Flood } = require('leaf-utils');

module.exports = {
    name: "flood",
    description: "flood game",
    options: [{
        name: 'difficulty',
        description: 'choose the difficulty',
        type: 'INTEGER',
        choices: [{
                name: 'easy',
                value: 7
            },
            {
                name: 'medium',
                value: 9
            },
            {
                name: 'hard',
                value: 11
            },
            {
                name: 'impossible',
                value: 13
            }
        ],
    }, ],

    run: async (client, interaction, args) => {

        await Flood({
            message: interaction,
            slash_command: true,
            time: 300000,
            difficulty: interaction.options.getInteger('difficulty'),
            embed: {
                title: 'Flood',
                color: '#FFAE0E'
            },
            emojis: {
                redsquare: '🟥',
                bluesquare: '🟦',
                yellowsquare: '🟨',
                greensquare: '🟩',
                purplesquare: '🟪',
                style: 'SECONDARY',
            },
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
    },
};
```