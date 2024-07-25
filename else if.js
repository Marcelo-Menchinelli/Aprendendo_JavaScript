/*

If = se
Else = senão
Else if = esse faz uma segunda condição caso o if nao confirá se é verdadeiro.

*/


const temperature = 42 

if (temperature === 36) {
    console.log("Não esta com febre")
}

else if (temperature >= 36 && temperature <= 39) {
    console.log("Esta com febre alta")
}

else if (temperature == 40 || temperature >= 40 && temperature <=41) {
    console.log("Esta com febre altissima")
}

else {
    console.log("Esta com hipotermia")
}

