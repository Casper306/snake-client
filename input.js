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
  } else if(key === 'g'){
    connection.write('Say: GO');
    console.log('GO');
  } else if(key === 'y'){
    connection.write('Say: YO');
    console.log('YO');
  }
};



 module.exports = {setupInput};


// let connection;

// const setupInput = function(conn) {
//   connection = conn;
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();


//   const handleUserInput = function(key) {
//     if (key === '\u0003') {
//       process.exit();
//     } else if (key === "w") {
//     // console.log("Going Up")
//       connection.write("Move: up");
//     } else if (key === "s") {
//     // console.log("Going Down")
//       connection.write("Move: down");
//     } else if (key === "a") {
//     // console.log("Going Left")
//       connection.write("Move: left");
//     } else if (key === "d") {
//     // console.log("Going Right")
//       connection.write("Move: right");
//     } else if (key === "z") {
//       connection.write("Say: YO!");
//     } else if (key === "x") {
//       connection.write("Say: Move it!");
//     }
//   };

//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// module.exports = {setupInput};