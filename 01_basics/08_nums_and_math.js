// let score = 555  //---> first method to print a number
// console.log(score);  


// let balance = new Number(300)  //---> second method to print a number
// console.log(balance);
// console.log(balance.toString().length);  //--> tostring is used to convert a number into a string
// console.log(balance.toFixed(5));


// let newNumber = 125.555
// console.log(newNumber.toPrecision(3));  //--> toPrecision() method used to precise the value


// let hund = 100000000
// console.log(hund.toLocaleString());  //---> it is used to format a number
// console.log(hund.toLocaleString('en-IN'));  //--> we can also format a number in our local format




//---------------------MATHS------------------
// console.log(Math);
// console.log(Math.abs(-45));  //--> it is used to change the negative sign into positive sign
// console.log(Math.round(25.15));  //--> this round method round off the decimal value. and it has two types 1) ceil() ,2) floor()
// console.log(Math.ceil(25.15));  //--> ceil()
// console.log(Math.floor(25.15));  //--> floor()
// console.log(Math.min(4, 5, 6, 1));  //--> it shows the minimum value in the array
// console.log(Math.max(4, 5, 6, 1));  //--> it shows the maximum value in the array
// console.log(Math.random());  //--> this method generates random values from 0 to 1
// console.log(Math.floor(Math.random()*10) + 1);  //--> "random()*10 + 1", "*10" is used to print values from 0 to 10 and "+ 1" is used to skip 0


let max = 50
let min = 45
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
