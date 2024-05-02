const myObject = {
  js : 'javascrip',
  rb : 'ruby',
  cpp : 'C++',
  swift: "swift by apple"
}

for (const key in myObject) {
  console.log(`${key} for shortcut is ${myObject[key]}`);
  
}


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
 console.log(programming[key]);
    
  }
  const map = new Map()
  map.set('IN' , "India")
  map.set('US' , "United States of America")
  map.set('FR', "France")
  map.set('IN' , "India")
  

  for (const key in map) {
    console.log(map[key]);
       
     }
     