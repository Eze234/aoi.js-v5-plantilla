const aoi = require('aoi.js')

const bot = new aoi.Bot({
  token: "token de tu bot", //Si usas replit quitale las comillas y pon process.env.token y crea un nuevo secret
  prefix: "prefix", //Aqui pondras tu prefix
  intents: "all" //Aqui Ponemos las intents en este caso todos
})

//Intents//
bot.onGuildJoin()
bot.onJoin()
bot.onMessage()
bot.onInteractionCreate()
//Intents
//debes ir a el portal de developers y activar los intents

//Command Handler
const load = new aoi.LoadCommands(bot)

load.load(bot.cmd, "./comandos/")
//En caso de que uses replit pon esto 
const express = require('express')
const app = express();

app.get("/", async(req,res) => {
  res.send('En linea')
})

app.listen(3000, async () => {
  console.log('App lista')
})

