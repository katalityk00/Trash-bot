const Discord = require("discord.js");

const private = require("./private-constant.js");

const Bot = require('./bot-mastering/bot');

const bot = new Discord.Client();

const token = private.token;


let botMaster = new Bot(bot,token);