// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined  == 0);
console.log(undefined  < 0);

// === "strict check" checks the datatype to

// ***************************MEMORIES*************************//

// Two types of memories
// stack (used in primitive type)
// Heap (Non-primitive)

let oldName = "shantanu"
let newName = "shaunty"

console.log(oldName);
console.log(newName);

let userOne = {
  email : "shantanu@gmail.com",
  upi: "shantanu@ybl"

}
let userTwo = userOne

userTwo.email = "shantanu@google.com"

console.log(userOne);
console.log(userTwo);