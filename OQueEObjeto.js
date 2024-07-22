/*O que é um objeto. basicamente um objetos nós adicionamos informações dele.
Exemplos abaixo: */

/*Exemplos de variaveis: */
const nome = "Marcelo"
const Age = 33
const Address = "Roldão monteiro de souza, 445"

/*Exemplos de um objeto usando uma variavel, porém para objeto abrimos os conchetes 
e adicionamos mais informações sobre esse objeto que estou criando. veja no exemplo abaixo: */
const usuario1 = {
    name: "Marcelo",
    age: 33,
    weight: 81,
    address: {
        Street: "Roldão monteiro de souza, 445", /*Posso colocar um objeto dentro de outro objeto como nesse exemplo */
        city: "Pirajú",
    }
}
console.log(usuario1) /*Posso chama o objeto com todas as suas informações */
console.log(usuario1.age) /*Posso chama o objeto com uma de suas informações */

/*Caso eu queira alterar uma informação do objeto siga o axemplo abaixo: */
const usuario2 = {
    name: "Marcelo",
    age: 33,
    weight: 81,
    address: {
        Street: "Roldão monteiro de souza, 445", /*Posso colocar um objeto dentro de outro objeto como nesse exemplo */
        city: "Pirajú",
    }
}
/*Para alterar uma das informações acima faça: */
usuario2.address.city = "São Paulo"
console.log(usuario2)