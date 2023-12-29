// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.




// let numeros = Number(prompt('Digite um numero '));
// let i 
// let divisores = 0

// for ( i = 1 ; i <= numeros ; i++){
//     if ( numeros % i === 0)
//     divisores++

// }if(divisores === 2){
//     document.write(`Seu numero ${numeros} e primo ! ! `)
// }else {
//     document.write(`Seu numero ${numeros} nao e primo ! !`)
// }

let insiraNumero = Number(prompt("Digite um número:"));
let primo = true;

for (let i = 2; i < insiraNumero; i++) {
    if (insiraNumero % i === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    document.write(`O número ${insiraNumero} é primo.`);
} else {
    document.write(`O número ${insiraNumero} não é primo.`);
}