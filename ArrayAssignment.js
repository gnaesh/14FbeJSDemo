//---------------- add ---------------------

const readline = require("readline-sync");
console.log("Enter the size of array ");
// Enter the number
let a = Number(readline.question());
console.log("Enter number of array ")
let number = [];
for (let i = 0; i < a; ++i) {
  number.push(Number(readline.question()));
}
console.log(number);

//------------- Delete ---------------------
const prompt = require('prompt-sync')({sigint: true});
const na=parseInt( prompt("enter number to delete : "));
var start = number.findIndex( demo =>  demo === na);
if (start === -1) {
  console.log("Data not found")
  console.log();
}
else {
  number.splice(start, 1);
  console.log("Aftere remvoe",number);
  console.log();
}

//------------------ insert ---------------
const insertnum=( prompt("enter number to add  : "));
const index=parseInt( prompt("enter index to add  : "));
number.splice(index, 0, insertnum);
console.log("insert         ",number);

//----------------- insert multiple -------------
const insertnum1=parseInt( prompt("enter count of numbers add to add  : "));
let a1 = Number(readline.question());
for (let j = 0; j < a1; ++j) {
  number.push(Number(readline.question()));
}
const index1=parseInt( prompt("enter numbers one by one to add  : "));
number.splice(index1, 0, insertnum1);
console.log("insert multiple",number); 

//--------------- repalce ---------------------
number.splice(1, 1, 33);
console.log("repalce         ",number); 

//---------------- Search ---------------------
const found = number.find(element => element > 5);
console.log(found);

//---------------- Sort ------------------------
number.sort(function(a, b) {
    return a - b;
  });
  console.log(number);

 
