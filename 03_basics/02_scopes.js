// var c = 200  // this is called as global scope

// let a = 555
// if(true){  // the content are present in this if statement this is called as block scope
//     let a = 454
//     const b = 52  
//     console.log(a);
// }
// console.log(a);



// function one(){
//     let username = "Umair"

//     function two(){
//         let website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()



// if(true){
//     let username = "Umair"
//     if(username == "Umair"){
//         let website = " Youtube"
//         console.log(username + website)
//     }
    // console.log(website);  // This is out of the scope
// }
// console.log(username);  // this is out of the scope


console.log(addone(4));
function addone(num) {
    return num + 1
}
// addone(5)


console.log(addtwo(8));
let addtwo = function(num){
    return num + 2
}
// addtwo(5)