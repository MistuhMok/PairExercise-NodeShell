//output a prompt
const exportsFromPwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line
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
  if (cmd.startsWith('cat ')) {
    const fileName = cmd.split(' ')[1]
    cat(fileName)
  }

  if (cmd.startsWith('curl ')) {
    const url = cmd.split(' ')[1];
    curl(url)
  }

});
