# WouldYouRather Command

## Example
```js
module.exports = {
  name: "wyr",
  code: `$djsEval[(async () => {
      
      const { WouldYouRather } = require('leaf-utils')
      
      await WouldYouRather({
	message: message,
	embed: {
		title: 'Would you rather | Leaf',
		color: '#5865F2',
        footer: '©️ Leaf',
		timestamp: true
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Option A', optionB: 'Option B' }
})

})()]
$suppressErrors`
}
```
