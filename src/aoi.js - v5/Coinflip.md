# Coinflip Command

## Example
```js
module.exports = {
    name: "coinflip",
    code: `$djsEval[(async () => {
    const { Coinflip } = require('leaf-utils')
      
await Coinflip({
    message: message,
    buttons: {
      heads: 'Heads',
      tails: 'Tails',
    },
    colors: {
      heads: 'DANGER',
      tails: 'PRIMARY',
    },
    startMessage: 'The coin is in the air Choose heads or tails below.',
    winMessage: 'GG, <@{{winner}}> The coin landed on **{{result}}**',
    loseMessage: '<@{{player}}> You lose The coin landed on **{{result}}**'
})

})()]
$suppressErrors`
}
```

## Button Styles
![button](https://user-images.githubusercontent.com/70775569/136095482-f0a34325-bf48-41a1-ada0-45c46e448d3e.jpg)

