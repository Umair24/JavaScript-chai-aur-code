//  Stack (It is used in Primitive datatypes), Heap (It is used in Non-Primitive datatypes)

// let myname = "Umair Ansari"
// let anothername = myname
// anothername = "xyz"
// console.log(myname);
// console.log(anothername);


let userOne = {
    email: "umair@gmail.com",
    upi: "xyz@paytm"
}  

let userTwo = userOne

userTwo.email = "anas@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
