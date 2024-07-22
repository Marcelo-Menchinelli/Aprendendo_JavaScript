

const element = document.querySelector(".primeiroParagrafo") // Fui até o html trazer uma classe.
/* Usou uma dos três elementos abaixo textContent/innerText/innerHTML para ler apenas o texto
 dentro da tag class, id ou a tag mesmo. se eu ler o console.log somente com o nome da variavel sem um dos três 
 textContent/innerText/innerHTML irei ler o texto dentro junto com o id, a classe dele, tudo junto.
 */

 // Posso alterar também o texto como no exemplo abaixo:

 element.textContent = "Este é o novo texto"         //   assim que altero o texto.
 element.textContent = " "       //   assim eu retiro o texto.

// console.log(element.textContent) //só o HTML
// console.log(element.innerText) // Leva em conta o css
 //console.log(element.innerHTML) // trás tudo

 //                                    exemplo:
element.innerHTML = "Este é o novo texto sobre a melhor linguagem de programação <b>JavaScript</b>" /* trás tudo até
mesmo posso trocar o texto e acrescentar html no texto como fiz na palavra javascript.
*/
console.log(element.innerHTML) // trás tudo ate mesmo o html e css.
