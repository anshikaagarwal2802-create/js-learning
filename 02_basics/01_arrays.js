//arrays
//imp 
//JavaScript array-copy operations create shallow copies. 
// (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//  As a result, when you change either the source or the copy, you may also cause the other object to change too. 
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
// As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
const myarr=[0,1,2,3]
// console.log(myarr[0])
// const myheros=["shaktiman","marvel"]
// console.log(myheros)
// const myarr2=new Array(1,2,3,4)
// console.log(myarr2)
// array methods
// myarr.push(4)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))

// const newarr=myarr.join();
// console.log(newarr)
// console.log(typeof newarr)
// slice and splice  diff is that splice manipulates original array but slice doesnot manipulates original array
console.log("A",myarr)
const myarr1=myarr.slice(1,3)
console.log(myarr1)
console.log("B",myarr)// no changes in original array
const myarr2=myarr.splice(1,3)
console.log(myarr2)
console.log("C",myarr) // 1 se 3 tak sare remove ho gye elements and this change reflected in original array





