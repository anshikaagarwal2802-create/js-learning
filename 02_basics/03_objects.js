//objects declare by two methods literal and constructor 
//singleton
//object ko if literal ki tarah declare karte ha  toh singleton nhi banta par if ctor se banega toh singleton
//object.create--> ctor method 
//object literal
//interview imp
//symbol ko define kia 
// const mysym=Symbol("key1")
//objects declaration
// const jsuser={
//     name:"anshika",
//     age:18,
//     [mysym]:"mykey1",//symbol as a key in a object
//     "full name":"anshika agarwal",
//     location:"jaipur",
//     email:"anshika@goggle.com",
//     isloggedin: true,
//     lastlogindays:["monday","thursday"]

// }
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])

// //symbol as a object key 
// console.log(jsuser[mysym])
// //to override values
// jsuser.email="anshikaag@gmail.com"
// console.log(jsuser.email)
// //values lock
// Object.freeze(jsuser)
// jsuser.email="ag@mail.com"
// console.log(jsuser.email)
//console.log(jsuser)
// jsuser.greeting=function(){
//     console.log("hello js user ")
// }
// console.log(jsuser.greeting())
// a function refering property of object 
// jsuser.greetingtwo=function(){
//     console.log(`hello js user, ${this.name}`)//to refer properties of object we used this 

// }
// console.log(jsuser.greetingtwo())
// const tinderuser=new Object()//singleton object
// //console.log(tinderuser)
// const tinderuser={}//non singleton object 
// console.log(tinderuser)
// tinderuser.id="123abc"
// tinderuser.name="sammy"
// tinderuser.isloggedin=false
// console.log(tinderuser)


// const regularuser=
// {
//     email:"some@gmail.com",
//     fullname:
//     {
//         userfullname:
//         {
//             firstname:"anshika",
//             lastname: "agarwal"
//         }
//     }
// }

// console.log(regularuser.fullname;
// );
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}//problematic as object ke andar object aa jayga 
// console.log(obj3)
//const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)
//syntax mostly used  when value comes from database
// const users=
// [
//     {
//         id:1,
//         email:'some@gmail.com'

//     },
//     {
//         id:1,
//         email:'some@gmail.com'

//     },
//     {
//         id:1,
//         email:'some@gmail.com'

//     }
// ]
// console.log(users[1].email)
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))// interesting thing is that here output ka data type array hota ha sari keys array me aa gyi ab isse bahut jagah use kar skte ha is par loop laga skte ha 
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// //property ko use karne se phele dekho ki uske pass yeh property ha ya nhi
// console.log(tinderuser.hasOwnProperty('isloggedin'))
//******************************************************************
// //object destructuring
const course=
{
    coursename:"dbms",
    price:"1000",
    courseInstructor:"babbar"

}
course.courseInstructor;// this syntax is not good if we have to access values multiple times 
// use this syntax
const{courseInstructor}=course//destructuring
//Object destructuring in JavaScript is a way to extract properties 
// from an object and 
// store them in variables.
console.log(courseInstructor)//jo value ham print kara rhe ha uska name apne acc de skte ha 
const{courseInstructor:Instructor}=course 
console.log(Instructor)
// // json syntax


// {
//     "name":"anshika",
//     "course":"cse"


// }we get apis in this format
// apis in array format
// [
//     {},
//     {},
//     {}

// ]
// not necessary that api ha toh sirf object hi milega 
//json->javascript object notation
//json kaafi apis industry me chalta ha 
