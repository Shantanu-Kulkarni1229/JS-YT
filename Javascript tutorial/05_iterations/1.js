for (let index = 0; index <=  10; index++) {
  console.log(index)  
}

for (let i = 0; i <= 10; i++) {
  console.log(`table of ${i}`);
for (let j = 0; j <= 10; j++) {
  console.log(i + "*" + j + "=" + i*j );
  
}  
}


// break and continue

// for (let index = 0; index <= 20; index++) {
//   const element = index
//   if (index === 5) {
//     break
    
//   }
  
  // console.log(element);
for (let index = 0; index <= 20; index++) {
  const element = index
  if (index === 5) {
    continue 
    
  }

  console.log(element);
  
}