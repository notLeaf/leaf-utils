# Npm Command

## Example
```js
module.exports = {
    name: "npm",
    code: `$djsEval[(async () => {
    const { Npm } = require('leaf-utils');
    
      await Npm({
	  message: message,
    args: args,
  
	embed: {
		title: '{{package}}',
		description: '{{package_description}}',
		color: '#5865F2'
	},
  query: 'Give me a package name to search',
  noResult: 'I cant find this package'
})

})()]
$suppressErrors`
}
```
