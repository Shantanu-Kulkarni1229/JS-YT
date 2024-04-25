let score =  "33abc"
// console.log(typeof score);
// console.log(typeof (score));
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33 easily converted to number
// "33aabc" => NaN = not a number
// true => 1; false => 0;



 let isLoggedIn = 1
 let booleanLoggedIn = Boolean(isLoggedIn)
//  console.log( typeof (booleanLoggedIn));
//  console.log(booleanLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "shantanu" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof (stringNumber));

// ******************************* OPERATIONS ******************************//

let value = 3
let negValue = -value
console.log(negValue);

//Arithematic operator +, - , * , ** (power) , / , %

let str1 = "hello"
let str2 = " shantanu"
// console.log(str1+str2);

// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + 2 + 2); // =>122
// console.log(1 + 2 + "2"); // => 32

console.log(+true);
console.log(+"")


let gameCounter =  100
gameCounter++
console.log(gameCounter);