// Methods to declare array
let myArr1 = [0, 1, 2, 3, 4, 5]
// let myArr2 = ["Umair", "Anas"]
// let myArr3 = new Array(23, 454, 65, 231)

// console.log(myArr3[3]);


// Array Methods
// myArr1.push(45,55)
// myArr1.pop(55)
// myArr1.unshift(10)  //--> this method adds an digit in a array at starting
// myArr1.shift()  //--> this method remove starting digit from the array


// console.log(myArr1.includes(5));
// console.log(myArr1.indexOf(5));


// let newArr = myArr1.join() 
// console.log(myArr1);
// console.log(newArr);



// slice, splice
console.log("A ", myArr1);

let myNewArray1 = myArr1.slice(1, 3) 
console.log("B ", myArr1);
console.log(myNewArray1);


let myNewArray2 = myArr1.splice(1, 3)
console.log("c ", myArr1);
console.log(myNewArray2);
