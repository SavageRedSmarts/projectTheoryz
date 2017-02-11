exports.run = function(client, message, args) {
  message.guild.setName(args.join(" ")).then(updated => console.log(`Updated guild name to ${guild.name}`)).catch(console.error);
}
