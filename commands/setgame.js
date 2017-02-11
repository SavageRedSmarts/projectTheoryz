exports.run = function(client, message, args) {
          const config = require("../settings.json");
          if(message.author.id !== config.OwnerID) return;
          let argsresult = args.join(" ");
          client.user.setGame(argsresult);
}
