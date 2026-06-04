const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const new_heros=marvel_heros.concat(dc_heros)
// console.log(new_heros)
//spread 
// const all_new_heros=[...marvel_heros,...dc_heros] // here we can add multiple values but concat me yeh limitation ha that's why this is used mostly

// console.log(all_new_heros)
//  const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)
console.log(Array.isArray("anshika"))
console.log(Array .from("anshika"))
console.log(Array.from({name:"anshika"})) // interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
// doesnot break strings to characters
console.log(Array.of("hello"))
