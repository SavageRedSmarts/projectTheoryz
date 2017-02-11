exports.run = function(client, message, args) {
    let modRole = message.guild.roles.find("name", "Redmod");
    if(message.member.roles.has(modRole.id)) {
    message.channel.sendMessage("bar!");
       } else {
           message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
       }

}
