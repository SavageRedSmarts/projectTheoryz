exports.run = function(client, message, args) {
  message.channel.sendMessage(args.join(" ")).catch(console.error);
}
