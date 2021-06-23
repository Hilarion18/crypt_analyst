var fs = require('fs')

let data = fs.readFileSync('data.txt', 'utf8');
let newData = data.toString().split("").filter((item, pos, self) => self.indexOf(item) == pos).join('')
console.log("== new Data", newData);
