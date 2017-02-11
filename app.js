const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./settings.json");
//const ddiff = require('return-deep-diff');
//const chalk = require('chalk');
require('./util/eventLoader')(client);
client.on("guildMemberAdd", member => {
    let guild = member.guild;
    client.channels.get("273608553661464576").sendMessage("Hello @Tre's MANAGER, welcome to iFire Official Discord! for more information go to #information and state your role in #role, and listen to music in our #music channel!")
});

client.on("guildCreate", guild => {
    console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});


client.login(config.token)
