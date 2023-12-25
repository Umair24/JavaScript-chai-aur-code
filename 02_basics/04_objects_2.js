let tinderUser = new Object()  //This is a Singleton object
// let tinderUser = {}  // this is an non-singleton object

tinderUser.id = "111"
tinderUser.name = "Umair"
tinderUser.isLoggedIn = true

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//  let regularUser = {
//     email: "umair@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Umair",
//             lastname: "Ansari"
//         }
//     }
//  }  // We can create multiple objects in a single object

//  console.log(regularUser.fullname.userfullname.firstname);



// let obj1 = {1: "a", 2: "b"}
// let obj2 = {3: "c", 4: "d"}
// let obj3 = {5: "e", 6: "f"}

// let obj4 = Object.assign({}, obj1, obj2, obj3)  // using assign() operater we can merge all objects
// let obj4 = {...obj1, ...obj2, ...obj3} //--> using Spread operater we can merge all objects
// console.log(obj4);


