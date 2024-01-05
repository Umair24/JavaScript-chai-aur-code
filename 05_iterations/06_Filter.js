// let coding = ["Java", "Js", "cpp", "python"]

// let values = coding.forEach( (item) => {
//     console.log(item); 
//     return item
// })
// console.log(values);



// let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNum.filter( (myNum) => {
//     return myNum > 5
// })
// console.log(newNum);



// Example
let users = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
    publish: 2000
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
    publish: 2010
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
    publish: 2012
}];

// let userBooks1 = users.filter( (bk) => bk.age === 26)
let userBooks2 = users.filter( (users) => {
    return users.publish == 2010 && users.age == 26
})  // in this arrow function we should use return function

// console.log(userBooks1);
console.log(userBooks2);
