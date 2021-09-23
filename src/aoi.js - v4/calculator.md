# Calculator Command

## Example
```js
bot.command({
  name: "calculator",
  code: `$djsEval[(async () => {
const Discord = require('discord.js');
const { Calculator } = require("leaf-utils");

//Settings
const Leafcalculator = new Calculator({
  destroy: "You locked me", //Default: "Calculator Locked"
  invalid: "Next time just put in a valid calculation!", //Default: Invalid Calculation"
  notauthor: "You aren't the calculator owner", //Default: "Only the author can use the calculator"
  deactivatemessasge: "I deactivated me", //Default: "The Calculator got deactivated"
  deactivatetime: 1000000, //Default are 10 minutes
  message: message, //Required
});

await Leafcalculator.start();

})()]`
})
```
