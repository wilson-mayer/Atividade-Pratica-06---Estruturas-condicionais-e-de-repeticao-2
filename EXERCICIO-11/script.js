// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turno = prompt('Digite a primeira letra  do turno em que você estuda (M, V, ou N) ');

switch (turno) {
    case 'm' :
        alert('Bom dia');
        break;
    case 'v' :
        alert('Boa tarde');
        break;
    case 'n' :
        alert('Boa noite');
        break;
    default:
        alert ('Valor inválido ');
        break;
}