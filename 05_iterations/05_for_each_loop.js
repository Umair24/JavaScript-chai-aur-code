// for each loop
let coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (item){
//     console.log(item);
// } )


// coding.forEach( (item) => {  // forEach() loop using arrow function
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item,index, arr)=> {
//     console.log(item,index,arr);
// })



let myCoding = [
    {
        langName: "javaScript",
        langFileNmae: "js"
    },
    {
        langName: "Python",
        langFileNmae: "Py"
    },
    {
        langName: "Java",
        langFileNmae: "Java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})