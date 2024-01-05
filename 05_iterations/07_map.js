let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNum.map( (num) => num + 70)

let newNum = myNum
.map( (num) => num * 20)
.map( (num) => num + 20)
.filter( (num) => num >= 100)

console.log(newNum);