# Match Command

## Example
```js
module.exports = {
    name: "match",
    code: `$djsEval[(async () => {
    const { Match } = require('leaf-utils')
      
await Match({
    message: message,
    embed: {
        title: 'Football Match',
        color: 'RED',
    },
    buttons: {
        left: '⏪ Left',
        middle: '⏺ Middle',
        right: '⏩ Right',
    },
    emojis: {
        goalkeeper: '🧍‍♂️',
        goal: '🥅',
        soccer: '⚽',
    },
    winMessage: 'GG, <@{{winner}}> scored in **{{time}} seconds**.',
    loseMessage: '<@{{player}}> You lose',
    ongoingMessage: 'A game is already runnning in <#{{channel}}>. You cant start a new one',
    othersMessage: 'Only <@{{author}}> can use buttons'
})
})()]
$suppressErrors`
}
```
