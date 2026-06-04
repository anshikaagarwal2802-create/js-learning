//date
// let mydate=new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toJSON())
// console.log(mydate.toTimeString())
// console.log(mydate.getHours())
// console.log(mydate.getMonth())
// console.log(typeof mydate)
// declaring dates 
// let  mycreateddate=new Date(2026,0,6)// months starts from zero in js 0 means starting from jan
// console.log(mycreateddate.toDateString())
// let mynewdate=new Date(2026,0,6,5,3)
// console.log(mynewdate.toLocaleString())
// let  mycreateddate=new Date("2026-01-06")
// console.log(mycreateddate.toDateString())
// let  mycreateddate=new Date('02-14-2026')
// console.log(mycreateddate.toDateString())
// let mytimestamp=Date.now()
// console.log(mytimestamp)
// console.log(mycreateddate.getTime())
//interview common to convert in secs 
console.log(Math.floor( Date.now()/1000))// to avoid decimal floor 
let mynewdate= new Date();
// to customize the date format using localestring 
console.log(mynewdate.toLocaleString('default',{
weekday:"long"    
}))
