// var c = 200  // this is called as global scope

let a = 555
if(true){  // the content are present in this if statement this is called as block scope
    let a = 454
    const b = 52  
    console.log(a);
}
console.log(a);
