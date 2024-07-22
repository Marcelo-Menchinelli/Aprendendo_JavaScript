/*
Operador "Typeof" me mostra o operador que eu esolhi se é um number ou
uma stryng ou um object
Exemplo=
*/

const myNumber = 20
const myStryng = "Texto do dia"
const myObject = {
    name:"Marcelo",
    age: 32,
    height: 1.69
}
console.log(typeof myObject)


/*
Posso usar o operador "delete" para ocultar algo
exemplo abaixo=
*/

delete myObject.age
console.log(myObject)