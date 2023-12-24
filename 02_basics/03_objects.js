// object literals

let mySym = Symbol("key1")
let JsUser = {
    name : "Umair",
    "full name": "Umair Ansari",
    [mySym] : "mykey1",
    age : 22,
    location : "Bhiwandi",
    email : "umair@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);  //---> we can not access this value in dot(.) format because this is declare in a string format in object
// console.log(JsUser[mySym]);  //--> we have to access square brackets for accessing mySym because this is a Symbol 
// console.log(typeof(JsUser.mySym));
// console.log(JsUser);

// JsUser.age = 33  //--> we can redeclare age in this way 
// console.log(JsUser.age = 44);  //--> we also can redeclare age in this way

// Object.freeze(JsUser)  //--> using freeze() method we can freeze the object

JsUser.greeting1 = function(){
    console.log("Hello World!");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${JsUser.name}`);
}

console.log(JsUser.greeting2());
console.log(JsUser.greeting1());