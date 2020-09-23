
const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (char) => {
  if (char === 'x') {
    process.exit();
  }
};

setupInput();
console.log('Connecting ...');
connect();


// stdin.on('data', (key) => {
//   // process.stdout.write('x');
//   const handleUserInput = function ({
//     if (key === 'x') {
//       process.exit();
// }
//   });

// if (key === '\u0003') {
//   process.exit();
// }
