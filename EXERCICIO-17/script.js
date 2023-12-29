// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

if (votosBrancos + votosNulos + votosValidos <= totalEleitores) {
    let perVotosBrancos = (votosBrancos / totalEleitores) * 100;
    let perVotosNulos = (votosNulos / totalEleitores) * 100;
    let perVotosValidos = (votosValidos / totalEleitores) * 100;

    document.write(`Percentual de votos brancos: ${perVotosBrancos.toFixed(2)}% <br>`);
    document.write(`Percentual de votos nulos: ${perVotosNulos.toFixed(2)}% <br>`);
    document.write(`Percentual de votos válidos: ${perVotosValidos.toFixed(2)}%`);

} else {
    document.write(`Erro: a soma dos votos brancos, nulos e válidos é maior que o número total de eleitores!!!`);
}

