// singleton
// object.create
// object literals

const mySym = "myKey1"


const Jsuser = {
  name : "shanatanu" ,
  "full name" : "shantanu kulkarni",
  [mySym] : "myKey1",
  age : 18 ,
  email : "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays : ['monday' , "saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log (Jsuser[mySym]);

Jsuser.email = "shantanu@chatgpt.com"
// Object.freeze(Jsuser) // chnges will not work

Jsuser.greetings = function(){
  console.log("hello world");
}
Jsuser.greetingtwo = function(){
  console.log(`hello js user , ${this.name}`);
}
console.log(Jsuser.greetings())
console.log(Jsuser.greetingtwo())
