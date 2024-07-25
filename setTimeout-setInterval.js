
/*

setTimeout -> Executa apenas uma vez
setInterval -> Executa varias vezes
clearInterval -> vai pausar o setInterval

*/
let number = 0
setTimeout(() => {
    console.log(Number++)
}, 10);

setInterval(() => {
    console.log(Number++)
}, 1);