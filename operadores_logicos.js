/*

Operadores Logicos

&&   ->  E   -> Pessoa Exigente
     true && true = tru
     true && false = false
     false && false = false

||   ->  OU  -> Tanto faz
     true && tru =true
     true && false = true
     false && false = false

!    -> Inverte os valores
     !true = false
     !false = true

*/

console.log(true && false && true) // Neste operador se todos forem verdadeiros ele mostra true. Se tiver um falso o resultado dá falso. 

console.log(true || false || false) // Neste operador se tiver pelo menos um verdadeiro o resultado é true.

console.log(!false) // Neste operador se tiver pelo menos um verdadeiro o resultado é true.
// oultimo exemplo de cima também pode ser assim:
console.log(!(true && false && true))