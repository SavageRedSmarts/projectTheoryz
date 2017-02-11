//const chalk = require('chalk')
module.exports = client => {
  client.channels.get("274307358946099200").sendMessage(`I'm online! Logged at: ${new Date()}`);
}
