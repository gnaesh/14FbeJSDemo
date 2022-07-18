//--------------------1------------------

// function greetMe(name){
//     console.log("Welcome to Capgemini : :"+name); 
// }

// //-----------------------2--------------------
// var greetMe = function(name){
//     console.log("Welcome to Capgemini : :"+name); 
// }

//---------3------------------------

var greetMe = new Function("name", "location","console.log('Weclome to capgemini: '+ name + ' - '+ location )" );
greetMe ("Ganesh", "pune");
var cn = "cg";
console.log("typ of cn : " +typeof(cn));
console.log("typ of greetme : " +typeof(greetMe));