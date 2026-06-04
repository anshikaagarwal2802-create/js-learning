//objects declare by two methods literal and constructor 
//singleton
//object ko if literal ki tarah declare karte ha  toh singleton nhi banta par if ctor se banega toh singleton
//object.create--> ctor method 
//object literal
//interview imp
const mysym=Symbol("key1")

const jsuser={
    name:"anshika",
    age:18,
    [mysym]:"mykey1",//symbol as a key 
    "full name":"anshika agarwal",
    location:"jaipur",
    email:"anshika@goggle.com",
    isloggedin: true,
    lastlogindays:["monday","thursday"]

}
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
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3)
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)
