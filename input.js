//const { connect } = require("./client");
let connection ;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  
};


const handleUserInput = function (key) { 
  if(key === '\u0003') {
    //console.log('key');
    process.exit();
  } else if(key === 'w'){
    connection.write('Move: up');
    console.log('go up');
  } else if(key === 'a'){
    connection.write('Move: left');
    console.log('go left');
  } else if(key === 's'){
    connection.write('Move: down');
    console.log('go down');
  } else if(key === 'd'){
    connection.write('Move: right');
    console.log('go right');
  }
};



 module.exports = {setupInput};


