# QuickWord Command

## Example
```js
module.exports = {
    name: "quickword",
    code: `$djsEval[(async () => {
      
      const { QuickWord } = require('leaf-utils')
      
await QuickWord({
    message: message,
    embed: {
        title: 'Quick Word | Leaf',
        color: '#5865F2',
        footer: '©️ Leaf',
        timestamp: true
    },
    backgroundhex: 'f5f5f5', // Without "#"
    texthex: '5865F2', // Without "#"
    textlength: 7,
    time: 60000,
	waitMessage: 'The buttons may appear anytime now!',
	startMessage:
		'First person to press the correct button will win. You have **{{time}}**!',
	winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
	loseMessage: 'No one pressed the button in time. So, I dropped the game!',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!"
});


})()]
$suppressErrors`
}
```
