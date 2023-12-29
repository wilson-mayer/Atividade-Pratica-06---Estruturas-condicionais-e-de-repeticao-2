// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.

// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.

// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);

// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);

// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let a = Number(prompt("Digite o lado A do triangulo: "));
let b = Number(prompt("Digite o lado B do triangulo: "));
let c = Number(prompt("Digite o lado C do triangulo: "));

if(a<b && b<a+c && c<a+b){
    document.write("É um triangulo!");
} else if((a==b && a!==c) || (a==c && a!==b) || (b==c && b!==a)){
    document.write("Isósceles!");
} else if(a!==b && a!==c && b!==c){
    document.write("Escaleno!");
} else if (a==b && a==c && b==c){
    document.write("Equilátero!")
} else {
    document.write('Nao e um triangulo')
}