// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

let numero = Number(prompt('digite um numero'));

switch(numero){
    case 1:
    document.write('Seu numero é Domingo')
    break
    case 2:
    document.write('seu numero é segunda')
    break
    case 3:
    document.write('seu numero é terca')
    break
    case 4:
    document.write (' seu numero é quarta')
    break
    case 5:
    document.write('seu numero é quinta')
    break
    case 6:
    document.write('seu numero é sexta')
    break
    case 7:
    document.write('seu numero é sabado')
    break
    default:
    document.write('Número inválido, digite de 1 a 7.')
}
