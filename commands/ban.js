exports.run = function(client, message, args) {
          let modRole = message.guild.roles.find("name", "Redmod");
          if(!message.member.roles.has(modRole.id)) {
              return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
          }
          let banMember = message.guild.member(message.mentions.users.first());
          if(!banMember) {
              return message.reply("That user doesn't exist you big dummy!")
          }
          if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
               return message.reply("I don't have god damn permission I place my money that this is my owners fault!").catch(console.error);
          }
          banMember.ban().then(member => {
              message.reply(`${member.user.username} was succesfully banned!`).catch(console.error);
          }).catch(console.error)
}
