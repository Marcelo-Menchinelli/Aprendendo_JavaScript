/* 
Null e Undefined são ausencia de uma informação, a diferença é que:
Null= Voce deixa se a informação de proposito.
Undefined= É porque alguma informação esta faltando.

*/

const usuario2 = {
    name: "Marcelo",
    nomeDoConjege: null, /*Neste caso deixei como null porque marcelo não é casado */
    age : 33,
    weight: 81,
    address: {
        Street: "Roldão monteiro de souza, 445",
        city: "Pirajú",
    }
}

console.log(usuario2.bairro) /*O bairro não existe no objeto, então ele é undefined*/
