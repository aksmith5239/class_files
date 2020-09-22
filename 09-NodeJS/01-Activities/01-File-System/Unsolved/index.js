const fs = require('fs');

fs.writeFile('hello.txt', process.argv[1], function(err){
 if (err) throw err;
 console.log('Done!');
});