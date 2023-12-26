// immidately invoked function expression (IIFE)


(function chai (){
    //named IIFE
    console.log(`DB Connected`);
}) ();

((name) => {
    console.log(`DB Connected too ${name}`);
})('waqar')