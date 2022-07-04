# ⏫ Fast Click

```js
const { FastClick } = require("leaf-utils");

await FastClick({
    message: message,
    slash_command: false,
    time: 300000,
    opponent: message.mentions.users.first(),
    embed: {
        title: "Fast Click",
        color: "#FC3E11",
    },
    challenge: {
        acceptButton: "Accept",
        denyButton: "Deny",
    },
    buttons: {
        correctText: "Click this button to win",
        wrongText: "Do not click this",
    },
    colors: {
        correctButton: "SUCCESS",
        wrongButton: "DANGER",
    },
    noUser: "You must mention someone",
    startMessage: "The button will appear in a few seconds, good luck",
    mainMessage: "Click the correct button to win",
    acceptMessage: "{{player}} has challenged you {{opponent}}",
    cancelMessage: "{{opponent}} refused to have a fight with you",
    winMessage: "{{winner}} win in {{time}} seconds!",
    wrongClick: "{{winneruser}} win because {{loser}} clicked the wrong button",
    endMessage: "Challenge not accepted in time",
    authorOnly: "You can't use these buttons",
});
```

## `/` Slash Commands

```js
message: interaction,
slash_command: true,
opponent: interaction.options.getUser('user')
```
