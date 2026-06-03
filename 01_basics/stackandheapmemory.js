//stack(primitive)--> changes in copy not in original -->copy provided 
//eg:
let myYoutubename="boldqueen"
let anothername=myYoutubename
console.log(anothername)
anothername="motive"
console.log(anothername)
console.log(myYoutubename)


//  and heap(non primitive) ->refrence is provided  so original me changes ho jayge 
//eg->
let userone=
{
    email:"user1@google.com",
    upi : "user@ybl"

}
let usertwo=userone
usertwo.email="user2@google.com"
console.log(userone.email)