/* var forever = require('forever-monitor');

var child = new (forever.Monitor)('localserver.js', {
  max: 3,
  silent: true,
  args: []
});

child.on('exit', function () {
  console.log('localserver  .js has exited after 3 restarts');
});

child.start();
//let us put a pause in this (trying localserver) */