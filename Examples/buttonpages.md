# Button pagination Command

## Example
```js
bot.command({
name: "button-pagination",
code: `$djsEval[(async () => {
const { MessageButtonPages } = require("leaf-utils");
const { MessageEmbed } = require('discord.js');

let embed1 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("first page")

    let embed2 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("second page")

    let embed3 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("third page")

    //Settings
    const LeafPages = new MessageButtonPages()
    .setEmbed([embed1, embed2, embed3]) //Embed object
    .setDuration(30000) //Duration time MS.
    .setCountPage(false) //Default: true.
    .setEmoji("⏪", "⛔", "⏩") //Default: "⬅️", "❌", "➡️"
    .setColor("green", "blurple", "green") //Default: "grey", "red", "grey"

    LeafPages.buttonPages(message);

})()]`
})
```
