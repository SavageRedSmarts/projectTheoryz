module.exports = client => {
  client.channels.get("274306966560702464").sendMessage(`New guild added : ${guild.name}, owned by ${guild.owner.user.username} at ${new Date()}`);
}
