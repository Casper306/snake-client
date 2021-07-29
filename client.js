const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: CAS');
    // setTimeout(() => {conn.write('Move: up')}, 500);
    // setTimeout(() => {conn.write('Move: left')}, 1000);
    // setTimeout(() => {conn.write('Move: down')}, 1500);
    // setTimeout(() => {conn.write('Move: right')}, 2000);
    //setInterval(() => {conn.write('Move: up')}, 500);
    conn.write('Move: up');
    conn.write('Move: left');
    conn.write('Move: right');
    conn.write('Move: down');
    conn.write('Say: GO');
    conn.write('Say: YO');
  });
  

  

  return conn;
};

module.exports = { connect };