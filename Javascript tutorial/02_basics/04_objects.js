const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

console.log(tinderUser);


const regularUser = {
  email : "some@gmail.com",
  fullName : {
    userFullname : {
      firstName :"Shantanu",
      lastName : "kulkarni"
    },
  },
}

console.log(regularUser.fullName.userFullname.firstName)

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}
const obj4 = {5: "a", 6 : "b"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1,  obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


