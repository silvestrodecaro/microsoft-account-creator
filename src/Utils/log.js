const colors = require("colors");

function log(message, color) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${colors[color](`[${timestamp}]`,)} ${message}`);
}

module.exports = log;
