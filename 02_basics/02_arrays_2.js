// let marvel_heros = ["thor", "spiderman", "ironman"]
// let dc_heros = ["superman", "batman", "flash"]

// console.log(marvel_heros.push(dc_heros));  //--> we can use push() or conca() method to merge an array and "push() method push in existing array"
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


// let combine = marvel_heros.concat(dc_heros)  //--> we can use push() or conca() method to merge an array and "concat() method returns new array after merging of two array"
// console.log(combine);


// let combine_heros = [...marvel_heros, ...dc_heros]  //--> This is a third method to merge an array
// console.log(combine_heros);


// let new_Array = [12, 35, 56, [89, 55, 56], 88, [40, 25, [2,78]]]
// let my_new_Array = new_Array.flat(Infinity)  //--> flat() method is used for printing an array in a one flow
// console.log(my_new_Array);


// console.log(Array.isArray("Umair"));  //--> isArray() method are used to check the given input is array or not
// console.log(Array.from("Umair"));  //--> from() method is used to convert a string to an array
// console.log(Array.from(({name : "umair"})));  //--> in object we have to specify in the code which part of an object should connvert into an array


let score1 = 50
let score2 = 100
let score3 = 150

console.log(Array.of(score1, score2, score3));