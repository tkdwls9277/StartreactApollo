const readline = require('readline');

let rl = readline.createInterface({ input: process.stdin });
	
// for (const line of rl) {
//   var count = line;
//   rl.close();
// }
let input = [];
var count = 0;
rl.on('line', function (line){
  count = line;
}).on('line', function (line) {
    input.push(line);
    if(count==0){
      rl.close()
    }
    count--;
  });