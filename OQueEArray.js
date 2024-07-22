/*
Array serve para eu guardar varios dados num lugar só.
*/

const myArray = [
    20, 30, "Uma texto", 10
]
/*Ou posso usar como no exemplo abaixo para guardar muitas informações de muitos usuario */
const Users = [
    {
        name: "Marcelo",
        age: 33,
        weight: 81,
        address: {
            Street: "Roldão monteiro de souza, 445", 
            city: "Pirajú",
        }
    },
    {
        name: "Loyde",
        age: 30,
        weight: 81,
        address: {
            Street: "Roldão monteiro de souza, 445", 
            city: "Pirajú",
        }
    },
    {
        name: "João",
        age: 33,
        weight: 81,
        address: {
            Street: "Roldão monteiro de souza, 445",
            city: "Pirajú",
        }
    }
]

/*Para visualizar uma posiçõa do array basta:*/

const myArray1 = [
    20, 30, "Uma texto", 10
]
console.log(myArray[1]) /*Assim posso acessar uma posição do usuario(lembrando queas posiçoes começam do 0,1,2,etc) */
myArray[1]= 3 /*Esse comando é para alterar uma posição do usuario dentro do array */

/*outro exemplo agora para alterar uma informação do array.Aqui abaixo tenho minha variavel: */

let array1 =[

    {name: "João",
    age: 33,
    weight: 81,
    address: "Roldão monteiro de souza, 445",
    city: "Pirajú",
    }
]

array[0].age =25/*Vou mudar uma informação da minha variavel: */
console.log(array1.age)/*vou mostrar a posição age do meu array */
console.log(array1[0].name)/*vou mostrar a posição name do meu array.OBS:A posição [0] dentro exemplifica
 a primeira posição de um objeto no caso o usuario "joao", se houvesse varios usuarios basta eu colocar a 
 posição deles. */
 