const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting....");

// activate connection
const conn = connect();

// allow connection to take user input
setupInput(conn);