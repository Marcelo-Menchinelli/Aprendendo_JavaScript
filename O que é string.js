/*
string são textos.
veja abaixo alguns exemplos e como podemos formar textos.
*/ 
"Posso criar um texto com aspas duplas"
'Posso criar um texto com aspas simples '
`Posso criar um texto com crase` /* talvez ela seja chamada de template literals ou template string. 
com crase podemos pular linhas.
Algo que só o template string(texto com crase) consegue fazer é isso, acompanhe no exemplo abaixo:
*/

const texto1 = "Posso criar um texto com aspas duplas"   /* exemplo de como criar uma variavel com texto*/
const texto2 = 'Posso criar um texto com aspas duplas'
const texto3 = `Posso criar um texto com aspas duplas`

console.log(texto1)   /* o console.log é um comando para visualizar a variavel que eu crie. exemplo <<<   */

/*Continue vendo mais abaixo: */

const texto4 = `Posso criar um texto com aspas duplas` /* talvez ela seja chamada de template literals ou template string. 
com crase podemos pular linhas.
Algo que só o template string(texto com crase) consegue fazer é isso, acompanhe no exemplo abaixo:
*/
const myAge = 30
const myString = `Minha idade é ${myAge} ` /*ao colocar o simbolo de dolar e abrir os conchetes o que irá 
aparecer no codigo JS é o numero 30 e não a palavra "myAge" */