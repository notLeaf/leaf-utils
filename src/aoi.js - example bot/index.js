const Aoijs = require('aoi.js')

const bot = new Aoijs.Bot({
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
    errorMessage: ["", "{newEmbed:{title:An Error has occured}{description:Something went wrong}{color:#FB4413}}", "{actionRow:{button:Error:danger:id:yes}"]
})

bot.onMessage()
bot.onMessageUpdate()
bot.onInteractionCreate()
require('./handler/status')(bot)
require('./handler/variables')(bot)


const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

loader.setColors({
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"],

        text: ["bright", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgRed"],
    },
    loaded: {
        command: ["bright", "fgCyan"],
        type: ["bright", "fgBlue"],
        text: ["bright", "fgGreen"]
    },
})