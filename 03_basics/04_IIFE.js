// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // This is a named IIFE
    console.log("DB Connected");
})();


( (name) => {
    // this function is not a named IIFE
    console.log(`DB Connected Two ${name}`);
}) ("Umair")