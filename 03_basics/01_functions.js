//function definition
// function sayMyname()
// {
//     console.log("A");
//     console.log("N");
//     console.log("s");
//     console.log(".....")
// }
// // function reference
// sayMyname
// // function execute 
// sayMyname()
// // function to add two numbers 
// // function addtwonumbers(number1,number2)
// // {
// //    console.log(number1+number2);

// // }
// function addtwonumbers(number1,number2)
// {
//    //let result=number1+number2;
//   // return result;//after return statement nothing executes 
//   return number1+number2

// }
// const result=addtwonumbers(3,4)// function is not giving anything 
// console.log("Result:",result);// here output is undefined because yah function kuch return nhi kar rha ha functions ke andar bss console.log (means print ho rha ha bss)
// function loginusername(username="sam")// we can give default values
// {    if(!username)
//    // if(username===undefined)//undefined and empty string means false then ham if block ke andar ja hi nhi paynge so ham use krte ha !to reverse 
//     {
//         console.log("please enter username ")
//         return
//     }
//     return `${username} just logged in`
// }
//console.log(loginusername("anshika"))
//console.log(loginusername())
// function calculatecartprice(...num1)
// {
//     return num1;
// }
// console.log(calculatecartprice(200,400,600,2000));
// function calculatecartprice(val1,val2,...num1)
// {
//     return num1;
// }
// console.log(calculatecartprice(200,400,600,2000));
const user=
{
    username:"anshika",
    price:199
}
function handleobject(anyobject)
{

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
//handleobject(user) or
handleobject(
    {
       username:"anshika",
       price:199 
    }
)
const mynewArray=[200,400,600,800]
function returnsecondvalue(getarray)
{
    return getarray[1]
}
//console.log(returnsecondvalue(mynewArray)) or
console.log(returnsecondvalue([200,400,600,800]))