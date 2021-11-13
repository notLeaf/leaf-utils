//setup
const Aoijs = require('aoi.js');
const config = require('./config.js');
const bot = new Aoijs.Bot(config.Bot);
const fs = require('fs');


//configs
require('./handler/status')(bot)
require('./handler/variables')(bot)
require('./handler/callbacks')(bot)


//loader
const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

loader.setColors( loader.themes.default );


//events
const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});  