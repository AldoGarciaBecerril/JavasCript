function resta(a, b) {
    return a - b;
}

let resultador = resta(25, 15);
console.log(resultador);

console.log(typeof resta);

function suma(a, b, c ) {
    console.log(arguments)
    return (a + b) - c;
}

let resultado = suma(9, 11, 20, 25, 48);
console.log(resultado)