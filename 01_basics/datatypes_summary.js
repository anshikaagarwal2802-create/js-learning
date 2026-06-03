// datatypes -> primitive and non-primitive
// kis tarah se data ko memory me rakha jata ha aur access kia jata ha us basis par data ka two 
// categorisation ha  ->primitive && non-primitive
// Primitive (call by value hote hai)
// 7 types :  STRING,NUMBER,NULL,UNDEFINED,BOOLEAN,SYMBOL(UNIQUE KE LIY),BIGINT


// REFERENCE(NON PRIMITIVE)
// ARRAYS ,OBJECTS ,FUNCTIONS
//JavaScript is a dynamically typed programming language.
// This means that you do not need to explicitly declare the data type of a variable 
// when you create it, and the type of a variable can change during runtime. 
// const Score=100;
// const score=100.3;
// const isLoggedin=false;
// const outsidetemp=null;
//  const sym=symbol("foo");
// typeof sym;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(Primitive)-->copy ,heap(non-Primitive)-->reference 
// let myYoutubename="anshikaagarwal"
// let anothername= myYoutubename
// anothername="ashi"
// console.log(myYoutubename)
// console.log(anothername)

// let userone=
// {
//     email:"user@google.com",
//     upi: "user@ybl"

// }
// let usertwo=userone
// usertwo.email="anshika@google.com"
// console.log(userone.email)
// console.log(usertwo.email)
// const bigNumber=3455788765444444444444n// represents bigint
// const id=Symbol('123')
// const anotherid=Symbol('123');
// console.log(id==anotherid)
// arrays 
const fruits=["apple","mango","guava"]
{
    name="anshika"
    age=20
}
// or letmyobj={
//     name="anshika"
//     age=20
// }
const myfunction=function(){
    console.log("Hello World");
}
console.log(typeof fruits)
//non primitive types ka return type object hota ha function ka function aata ha but usko object function kheta ha



