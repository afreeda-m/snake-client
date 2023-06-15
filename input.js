const { moveKeys } = require("./constants");

//Store the active TCP connection object
let connection;

// check for user key input to send server commands
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else if (Object.keys(moveKeys).includes(data)) {
    connection.write(moveKeys[data]);
  }
};

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };