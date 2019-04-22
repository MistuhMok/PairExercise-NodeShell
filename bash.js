//output a prompt
const exportsFromPwd = require('./pwd')
const ls = require('./ls')

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a suer types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

  if (cmd === 'pwd') {
    exportsFromPwd(cmd)
  }
  if (cmd === 'ls') {
    ls(cmd)
  }


});
