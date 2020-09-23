const net = require('net');
const { host, port } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });

  conn.on('connect', (connect) => {
    console.log('Successfully connected to the game server');
    conn.write("Name: KNH");
  });

  conn.on('data', (data) => {
    console.log('Incoming:', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };