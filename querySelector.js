/*

querySelector - procura um elemento pela tag ou pela classe ou id e sempre vai me trazer o primeiro paragrafo apenas
ou se eu selecionar uma classe ele vai me razer a primeira classe que encontrar.

*/
//                             exemplo: pela sua tag use o a tag como h1 ou p por exemplo.
const elements = document.querySelector("p")

console.log(elements)

//                             outro exemplo: pela sua classe use o .primeiroParagrafo

const elements1 = document.querySelector(".primeiroParagrafo")

console.log(elements1)
//                             outro exemplo: pelo id use o #idButton

const elements2 = document.querySelector("#idButton")

console.log(elements2)

