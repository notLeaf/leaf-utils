# Github Command

## Example
```js
module.exports = {
    name: "github",
    code: `$djsEval[(async () => {
    const { Github } = require('leaf-utils');
    
      await Github({
	message: message,
  args: args,
  
	embed: {
		title: '{{author}}',
		description: 'Info about {{author}}',
		color: '#5865F2'
	},
  query: 'Give me a github username to search',
  noResult: 'I cant find this user'
})

})()]
$suppressErrors`
}
```
