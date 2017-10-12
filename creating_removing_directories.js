var fs = require('fs');

//fs.unlink('writeMe.txt');

fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

fs.mkdir('AsyncStuff', function() {
  fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('./AsyncStuff/writeMe.txt', data);
  });
});

fs.unlink('./AsyncStuff/writeMe.txt', function() {
  fs.rmdir('AsyncStuff');
});