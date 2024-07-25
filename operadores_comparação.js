
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual


// =    diferente // ele pergunta se eles são diferentes.
// ==   TOTALMENTE diferente // ele compara se o valor é igual, mas ele nao compara se e o tipo(ex: um numero 30 e uma string de "30" ).
// ===   TOTALMENTE diferente // ele compara se o valor é igula e também se o tipo é igual.

// Usando dois simbolos de igual o JS compara tanto se é mesmo numero. Exemplo=
const firstNumber = 30
const seccondNumber = 40
if (firstNumber == seccondNumber) { // JS compara se o primeiro numero é igual ao segundo numero.
console.log("São iguais")
} else {
console.log("Não são iguais")
}

// outra forma de fazer:
console.log(firstNumber == seccondNumber)





// Outra forma de fazer.
// Usando tre simbolos de igual o JS compara tanto se é mesmo numero como se é do mesmo tipo. Exemplo=
const firstNumber1 = 30
const seccondNumber2 = "30"

if (firstNumber1 === seccondNumber2) {
    console.log("Sim são o mesmo")

} else {

    console.log("Não são o mesmo")
}





// Outra forma de fazer.
// Usando um simbolo ! e um = ele quer são se eles são diferentes(numero). Exemplo=
const firstNumber11 = 30
const seccondNumber22 = 30

if (firstNumber11 != seccondNumber22) {

    console.log("Sim são diferentes")

} else {

    console.log("Não são diferentes")
}


// Outra forma de fazer.
// Usando um simbolo ! e dois == ele quer são se eles são diferentes(numero) e se são diferente no tipo. Exemplo=
const firstNumber111 = 30
const seccondNumber222 = "30"

if (firstNumber111 !== seccondNumber222) {

    console.log("Sim são diferentes")

} else {

    console.log("Não são diferentes")
}


// maior ou menor. Exemplo=
const firstNumberA = 30
const seccondNumberB = 29

if (firstNumberA >= seccondNumberB) { // poderia usar maior/menor/maior-igual/menor-igual

    console.log("Sim é maior")

} else {

    console.log("Não é maior")
    
}

