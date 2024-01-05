let myNum = [1, 2, 3]

// let newNum = myNum.reduce(function (acc, currval) {    // reduce() function in function method
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 6)

// let newNum = myNum.reduce( (acc, currval) => {  //reduce() function in arrow function
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 6)

//  console.log(newNum);



let ShoppingCart = [
    {
        itemName: "js course",
        price: 555
    },
    {
        itemName: "python course",
        price: 444
    },
    {
        itemName: "cpp course",
        price: 999
    },
]

let total = ShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(total);