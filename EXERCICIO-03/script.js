// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let numero = Number(prompt('digite um numero'));

if (numero == 1){
    document.write('Seu numero é Domingo')
}else if(numero == 2){
    document.write('seu numero é segunda')
}else if (numero == 3){
    document.write('seu numero é terca')
}else if (numero == 4){
    document.write (' seu numero é quarta')
}else if( numero == 5){
    document.write('seu numero é quinta')
}else if(numero == 6){
    document.write('seu numero é sexta')
}else if(numero == 7){
    document.write('seu numero é sabado')
}else{
    document.write('Número inválido, digite de 1 a 7.')
}
