exports.run = function(client, message, args) {
  message.channel.setName(args.join(" ")).then(newChannel => console.log(`Channel's new name is ${newChannel.name}`)).catch(console.error);
}
