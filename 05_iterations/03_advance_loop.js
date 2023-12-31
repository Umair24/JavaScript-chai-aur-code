// forof loop
// let arr = [1, 2, 89, 56, 78]
// for (let i of arr) {
//     console.log(i);
// }


// let greetings = "Hello world"
// for (let greet of greetings){
//     console.log(`Each char is ${greet}`);
// }



// Maps
// let map = new Map()
// map.set('IN', "India")
// map.set('USA', "United state of america")
// map.set('Fr', "France")
// map.set('IN', "India")

// // console.log(map);
// for (const [key, value] of map) {
//     console.log(key , value);
// }


let myObj = {
    game1: 'spiderman',
    game2: 'GTA'
}
for (const [key, value] of myObj) {
    console.log(key, value);
}