module.exports = {
    Bot: {
        token: 'token',
        prefix: "$getServerVar[prefix]",
        intents: "all",
        database: {
            type: "default",
            path: "./db/",
            tables: ["leaf"],
            promisify: false
        },
        respondOnEdit: {
            commands: true
        },
        suppressAllErrors: true,
        errorMessage: ["", "{newEmbed:{title:An Error has occured}{description:Something went wrong}{color:#FB4413}}", "{actionRow:{button:Support Server:5:https\\://discord.gg/yfD2Vmnr6F}}"]
    }
}