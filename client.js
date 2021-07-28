const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
conn.on('data', () =>{
  console.log("you ded cuz you idled");
});

conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write('Name: CAS')
}); 



  return conn;
};

module.exports = {connect};