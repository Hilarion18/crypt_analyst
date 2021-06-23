var fs = require('fs')

let data = fs.readFileSync('data.txt', 'utf8');
let newData = data.toString().split("").filter((item, pos, self) => self.indexOf(item) == pos).join("")

let smallestLex = newData.split("").sort().join("");
let biggestLex = smallestLex.split("").reverse().join("");

console.log("The smallest lexicographical order is: " + smallestLex);
console.log("The first occurence from left to right is: " + biggestLex);
