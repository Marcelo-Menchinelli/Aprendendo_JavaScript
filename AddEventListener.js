/*

AddEventListener é um parametro que fica monitorando um função para me dar informações sobre o evento que aconteceu.
acompanhe no exemplo a seguir:
No exemplo usei uma estrutura HTML com nome "AddEventListener.html"
AddEventListener vai me avisar quando um evento ocorrer.

*/

const input = document.querySelector("#idInput")
const select = document.querySelector("Select")
const button = document.querySelector(".ClassButton")

select.addEventListener("change", function(){
    console.log("Troquei o valor")
})
//function troqueiOValor (event){
  //  console.log(event)
//}

   
           /* o js vai monitorar quando mudar o select pra outra opção ou seja houver 
um "change" o js vai me avisar. a função aqui citada nao tem nome pq é uma função anonima.*/

