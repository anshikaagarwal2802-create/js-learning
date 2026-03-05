const name="anshika"
const repocount=6
console.log(name+repocount+" value") // not recommended to use this syntax 
// use this syntax 
console.log(`hello my name is ${name} my repo count is ${repocount}`)
const gamename= new String("cooking")
console.log(gamename[0])
console.log(gamename.__proto__) // gives object and that was empty but aisa hota nhi ha isme methods ha bahut sare 
// accessing method of prototype 
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('k'))
const newstring=gamename.substring(0,4) // last index value not included 
console.log(newstring)
const anotherstring=gamename.slice(-7,-4)
console.log(anotherstring)


