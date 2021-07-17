function soma(a,b){
    return a + b
}
function mult(a,b){
    return a * b
}
function sub(a,b){
    return a - b
}
function div(a,b){
    return a / b
}

// let resultadoA = soma(10,20)
// let resultadoB = mult(10,20)
// let resultadoC= div(10,20)
// let resultadoD = sub(10,20)

// console.log(resultadoA)
// console.log(resultadoB)
// console.log(resultadoC)
// console.log(resultadoD)

module.exports = {
    soma, mult, div, sub
}