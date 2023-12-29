// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let numero = Number(prompt("digite um número: "));
let i = 2;

while(i < numero ){
    if(i % 2 > 0){
        document.write(i+"<br>")
    }
    i++
}