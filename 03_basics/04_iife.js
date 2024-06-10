// Immediately Invoked Function Expressions (IIFE)

debugger
(function chai(){
    // named IIFE
    console.log(`DB Connected`)
})();

((name)=>{
    // anonymous IIFE
    console.log(`DB connected TWO ${name}`)
})('hitesh')
