const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.on('connect', (connect) => {
    console.log('Successfully connected to the game server');
    conn.write("Name: KNH"),;
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //   }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 3000);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 4000);
  });

  // conn.on('connect', () => {
  //   conn.write("Name: KNH");
  // });

  conn.on('data', (data) => {
    console.log('Incoming:', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };