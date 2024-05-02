// ***************************REDUCE ******************

const myNums = [ 1,2,3,4,5,5,6,7,7,8,6,4,6,7,76,]

// const myTotal = myNums.reduce(function (acc, currval){
//   console.log(`${acc} and ${currval}`);
//   return acc+ currval
// }, 0)



myTotal = myNums.reduce((acc, currval) => acc+currval , 0)
console.log(myTotal);


const shoppingCart = [
  {
itemName : "py coure",
price : 999
  },
  {
itemName : "js coure",
price : 1999
  },
  {
itemName : "rb coure",
price : 2999
  },
  {
itemName : "mobile coure",
price : 9999
  },
  {
itemName : "ds coure",
price : 12999
  },
]

newprice = shoppingCart.reduce((acc , item)=> acc + item.price, 0 )
console.log(newprice);