let score =  "33abc"
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33 easily converted to number
// "33aabc" => NaN = not a number
// true => 1; false => 0;



 let isLoggedIn = 1
 let booleanLoggedIn = Boolean(isLoggedIn)
 console.log( typeof (booleanLoggedIn));
 console.log(booleanLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "shantanu" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));