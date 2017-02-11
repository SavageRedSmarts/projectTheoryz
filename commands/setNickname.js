exports.run = function(client, message, args) {
  let member = message.member.user.username
  let arg = args.join(" ");
  member.setNickname(arg);

 }
