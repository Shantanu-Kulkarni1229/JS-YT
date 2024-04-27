// String can be denoted by single as well as double quotes. ('')("")
const name = "shantanu"
const repoCount = 50

console.log(name + repoCount + "value"); // very much outdated  syntax instead

console.log(`Hello my name is ${name} and i've a total ${repoCount} repository in github`);// string interpolation syntax


const gameName = new String('shan-tanu')

console.log(gameName[3]);// string is a object and the values are key value paier

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,  4)
console.log(newString);

const newStringtwo = gameName.slice(-8,  4)
console.log(newStringtwo);

const newStringOne = "    shantanu"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shantanu.com/shantanu%20kulkarni"
console.log(url.replace("%20" , "-"));
console.log(url.includes("sundar"));


