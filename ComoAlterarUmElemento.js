
// Exemplo de como usar o JavaScript para alterar um elemento:

const element = document.querySelector("#idButton") // Selecionei uma classe do input para ser lido.

 element.placeholder = "Escreva Aqui"  // Estou usando aqui o JS para alterar o que esta escrito dentro do input.
 //                                outro exemplo:
 element.value = 1234 // Estou usando aqui o JS para alterar o que esta escrito dentro do input colocando um valor.

 console.log(element.placeholder)  // estou lendo o input e pegando o que esta escrito dentro do placeholder.
  //                                outro exemplo:
 console.log(element.value)  // estou lendo o input e pegando o que esta no value.




  //                                outro exemplo se eu tenho uma imagem:

  const element1 = document.querySelector("img") // estou lendo a fonte da minha imagem.

  element1.src="cafe-manha-realmente-refeicao-mais-importante-dia-miniatura.jpg"/* estou trocando a fonte da 
  minha imagem, trocando a imagem usando o jS. */

  console.log(element1.src)  // estou lendo a fonte(src) da imagem. 