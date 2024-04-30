 function sayMyName (){
 console.log("S");
console.log("H");
console.log("A");
console.log("N");
console.log("T");
console.log("A");
console.log("N");
console.log("U");
 }

 //sayMyName()

//  function addTwoNummber(num1,num2){
// console.log(  num1+num2);
//  }



function addTwoNummber(num1,num2){

// let result = num1+num2
// return result;
return num1+num2

}

 const result = addTwoNummber(2,6);
// 


function logInUserMessage(username){
  if ( username === undefined){
    console.log("please enter a username")
    return;
  }
  return ` ${username} just logged in `
}

// console.log(logInUserMessage("shantanu"))

// console.log(logInUserMessage("shantanuSS"))


function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {
  username: "shantanu",
  price: 1999
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const myNewArray = [200,400,300,600]

function returnsecondvalue(getarray){
return getarray[3]
}

console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue(100,200,400,300,200,4000));

