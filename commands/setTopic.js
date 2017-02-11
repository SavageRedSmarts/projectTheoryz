exports.run = function(client, message, args) {
  message.channel.setTopic(args.join(" ")).then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`)).catch(console.error);
}
