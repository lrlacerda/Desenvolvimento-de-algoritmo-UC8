let meuModulo = require("./ExemploNodeModule");
let readline = require('readline');

let consoleProcess = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

consoleProcess.question("Please type the name: ", function(input) {
    meuModulo.say(input);
    consoleProcess.close() ;
});

// var i = 1 ;

// while(true) {

//     console.log(i);
//     i++ ;

//     if( i == 20)
//         break;
    
// }






