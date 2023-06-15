//Store the active TCP connection object
let connection;

const handleUserInput = function(data) {
  if (data === '\u0003'){
    process.exit();
  } else if (data === 'w') {
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === '1') {
    connection.write("Say: hello")
  } else if (data === '2') {
    connection.write("Say: Let's play!");
  } else if (data === '3') {
    connection.write("Say: Fun!");
  } else if (data === '4') {
    connection.write("Say: ssss...yum!");
  }
};

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)

  return stdin;
};

module.exports = { setupInput };