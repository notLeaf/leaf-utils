module.exports = (bot) => {
    bot.readyCommand({
      channel: "",
      code: `$log[Ready on $userTag[$clientID]]`
   }) 
  } 