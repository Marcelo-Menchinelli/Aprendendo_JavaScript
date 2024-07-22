/*
 É um controlador de fluxo
 - IF (SE) -> Faça isso...
 - ELSE (SE NAO) -> Se nao, ele irá executar o else

  Operações de comparação poderá ser usadas
 > maior que...
 < menor que...
 == igual que
*/

/*
Exemplo de aplicação abaixo. para determinar se um aluno passou de ano na escola ou não.
*/
const notaDoAluno = 7
const notaDeCorte = 5

    /* o que será execultado se o if for verdadeiro. dentro do () coloco a condição que eu quero que seja execultado.
    Abaixo:     */
if (notaDoAluno > notaDeCorte) {
console.log("Parabens, você passou de ano")
}
else {
    console.log("Você não passou de ano")
}

//                                Outro exxemplo:

/*
Exemplo de aplicação abaixo. para determinar se a senha incerida está correta.
*/
const senhaDoUsuario = 223344
const senhaDigitada = 223343

    /* o que será execultado se o if for verdadeiro. dentro do () coloco a condição que eu quero que seja execultado.
    Abaixo:     */
if (senhaDoUsuario == senhaDigitada) {
console.log("Você está logado")
}
else {
    console.log("Senha incorreta")
}