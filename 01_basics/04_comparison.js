// console.log(2>3)
// console.log(2>=1)
// console.log(2!=1)
// console.log(2==1)
// avoid this type of comparison
// console.log("2">1);
// console.log("02">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// NOTE:
// the reason is that an equality check == and comparisons > < >= <= work differently. 
// comparsions convert null to a number,treating it as 0 .
// that's why (3) null>=0 is true and )(1) null>0 is false .
// avoid this type of conversion
// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);
// STRICT CHECK ===( data types ko bhi check krta hai if same data type nhi ha  toh conversion nhi krta so is case me false aata ha ans but if == hota toh true hi deta kyunki automatically convert kr deta ha )
console.log("2"===2);






