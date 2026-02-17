const accountId=34567
let accountemail= "john@gmail.com"
var accountpassword="12345"
accountcity="jaipur"
let accountstate;
// accountId=2 // not allowed
accountemail="ashi@gmail.com"
accountpassword="90806"
accountcity="udaipur"
console.log(accountId);
console.table([ accountId,accountemail,accountpassword,accountcity,accountstate])

/*
preferred not to use var because of  issue in the
block scope and functional scope
*/