const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AAM");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000)
  });

  conn.on("data", (data) => {
    console.log('Received data: ', data);
  });
  return conn;
};

module.exports = connect;
