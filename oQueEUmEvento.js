/*
Eu sempre vou colocar os eventos no html e linkar ele com javascript.
O evento esta linkado com a "função"
Todos os eventos que acontecem começam com "on" onblur, onchange, onclick, onplay,
onpause, onmousemove, onfocus e assim por diante. 

*/

function cliqueiNoBotao () { // Criei um funcão que foi no botão e pegou a informção quando o botão foi clicado.
    alert("Botão clicado com sucesso Marcelo") // coloquei um alerta que aarece quando eu clico no botão.
    console.log(inPutClick.value) // console.log foi na variavel que eu criei no input, quando eu digito no input e clico no botao aparece toda informação que eu cliquei porque chamei a variavel mais somente o valor dela. 
   }
  
   //                                Outro exemplo:
   const inPutClick = document.querySelector("#idButton")

   
function keyPress () { 
   
    console.log("Você esta digitando")
    console.log(inPutClick.value)
   }
    