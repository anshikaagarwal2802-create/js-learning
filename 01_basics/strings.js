// declaring strings 1st way 
const name="anshika -is- intelligent "
const repocount=10
// 2nd way to declare strings 
const anothername=new String("anshikaag")
console.log(anothername)
// console.log(name+repocount+"value")//old way 
// // we will use new way that is called string interpolation
// console.log(`hello my name is ${name} and my repo count is ${repocount}`);
//console.log(typeof(String))
// console.log(anothername[0])
// console.log(anothername.__proto__)
// console.log(anothername.length)
// console.log(anothername.toUpperCase())
// console.log(anothername.charAt(2))
// console.log(anothername.indexOf('s'))
// console.log(anothername.substring(0,4));// will go till 3 
console.log(anothername.slice(-9,4) )
// slice me we can give negative values also  
const newstring="   anshika   "
console.log(newstring);
console.log(newstring.trim())// removes starting and end spaces
console.log(anothername.replace('a',1))
const url="https://anshika.com//anshika%20agarwal"
console.log(url.replace('%20','-'))
console.log(url.includes('anshikaaa'))
console.log(name.split('-'))
console.log(name.blink())
console.log(anothername.bold());
