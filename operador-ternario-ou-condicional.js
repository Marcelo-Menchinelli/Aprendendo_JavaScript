/*

? = se
: = se não

exemplo:
*/

const rain = true
const umbrela = rain ? 'levar guarda-chuva' :  'Não levar guarda-chuva'

console.log(umbrela)

/*
exemplo 2=
*/

const balance= true
const isNotBlocked=true
const accountExist= true

const transferOk = balance && isNotBlocked && accountExist ? 'Transferencia realizada' :'Transferencia não realizada'

console.log(transferOk)