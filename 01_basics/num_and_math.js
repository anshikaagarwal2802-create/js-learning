// const score=400
// console.log(typeof score)
// const balance=new Number(100)
// console.log(balance)
// console.log(typeof balance.toString())// tostring returns string so type is string 
// console.log(typeof balance) //its type is object  as...new Number(100) creates a Number object, not a primitive number.
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// const n1=123.865
// console.log(n1.toPrecision(4))
// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'))
// console.log(Intl.NumberFormat.supportedLocalesOf(['en-IN']));
// console.log(hundreds.toLocaleString('en-US'))
//  console.log(process.versions.icu);
// console.log(new Intl.NumberFormat('en-IN').format(1000000));
// console.log(Intl.NumberFormat().resolvedOptions());
//**********************MATHS*********************
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.min(3,5,8,0))
// console.log(Math.max(100,300))
console.log(Math.random())// iski value 0 ho skti ha and 0 or  1 ke beech 
console.log((Math.random()*10)+1)// this will guarantee that min value 1 hogi not zero
// if value kuch aisi aai 0.3 then ham if isse floor ke sath use karenge then it will give zero so min one rakhne ke liye we add 1 to it 
console.log(Math.floor(Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random() *(max-min+1))+min)