// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let soma = 0;
let numero = 10;

do {
    soma+= numero;
    numero++;
    
} while(numero <= 100);

document.write("A soma de todos os números entre 10 e 100 é: " + soma);
