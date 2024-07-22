
function cliqueiNoBotao () { // 
    // alert("Botão clicado com sucesso Marcelo")
    console.log(inPutClick.value)
   }
  
   //                                Outro exemplo:
   const inPutClick = document.querySelector("#idButton")

   
function keyPress () { // keyPress é o nome que eu dei pra função no input.
   
    console.log("Você esta digitando")
    console.log(inPutClick.value)
   }
    
//Lição de casa: Quando eu digitar no input e clicar no botao, deve aparecer o que foi digitado la no paragrafo Teste pTeste.
const inPutClick1 = document.querySelector("#idinput")
function cliqueiNoBotao() {
const paragrafoTeste = document.querySelector(".pTeste")
   paragrafoTeste.textContent=inPutClick1.value
   }
