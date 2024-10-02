function saludo(nombre, apellido) {
    return 'holis ' + nombre + ' ' + apellido
}

console.log(saludo('Maria', 'andrade'))

function suma(numeroUno, numeroDos){
    return numeroUno + numeroDos
}

console.log(suma(2, 2))

function resta(numeroOtro, otroNumero){
    return numeroOtro - otroNumero
}

console.log(resta(4, 3))

function multiplicacion(numeroOtro, otroNumero){
    return numeroOtro * otroNumero
}

console.log(multiplicacion(5, 2))

function division(numeroUno, numeroDos){
    return numeroUno / numeroDos
}

console.log(division(10, 2))

function esMayor (numeroUno, numeroDos){
 if (numeroUno > numeroDos){
    return numeroUno
 } else  (numeroDos > numeroUno){
    return numeroDos
 }
}

console.log(esMayor(10, 5))