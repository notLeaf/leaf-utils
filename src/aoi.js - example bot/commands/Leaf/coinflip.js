module.exports = {
    name: "coinflip",
    code: `$djsEval[(async () => {
      const {
        Coinflip
    } = require('leaf-utils')
    
    await Coinflip({
        message: message,
        embed: {
            title: 'Coinflip',
            color: 'RED',
        },
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
        loseMessage: '<@{{player}}> You lose The coin landed on **{{result}}**',
        ongoingMessage: 'A game is already runnning in <#{{channel}}>. You cant start a new one',
        othersMessage: 'Only <@{{author}}> can use buttons'
    })
})()]`
}