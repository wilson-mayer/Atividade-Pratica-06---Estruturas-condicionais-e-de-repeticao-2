// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.



// let numero = Number(prompt("Digite um Número: "));

// if(numero%2 !== 0 && numero%3 !== 0 && numero%5 !== 0 && numero%7 !== 0 || numero == 2 || numero == 3 || numero == 5 || numero == 7) {
//     document.write("É primo");
// } else {
//     document.write("Não é primo!")
// }


let numeros = Number(prompt('Digite um numero '));
let i 
let divisores = 0

for ( i = 1 ; i <= numeros ; i++){
    if ( numeros % i === 0)
    divisores++

}if(divisores === 2){
    document.write(`Seu numero ${numeros} e primo ! ! `)
}else {
    document.write(`Seu numero ${numeros} nao e primo ! !`)
}