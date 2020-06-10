const Discord = require(discord.js");
const { CommandoClient } = require('discord.js-commando');
const ytdl = require('ytdl-core');
const mance = require("./database/mance.json");
const client = new Discord.client();
const infraction = require("./database/infraction.json");
client.muted = require("./database/muted.json");
const config = require("./config/config.json");
const fs = require('fs');
const stopwatcharray = [];
const helpmodembed = new Discord.MessageEmbed()
    .setColor('#E3A624')
    .setTitle('서버 관리 도움말(F_A)')
    .setURL('URL 없음')
