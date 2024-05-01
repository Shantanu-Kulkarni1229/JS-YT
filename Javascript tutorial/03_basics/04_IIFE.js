// Immediately Invoked Function Expressions (IIFE)

(function chai (){
  // NAMED IIFI
  console.log(`DB CONNECTED`)
})();



// Not NAMED IIFE
( (name)=>{
  console.log(`DB CONNECTED ${name}`);
}) ("shantanu")