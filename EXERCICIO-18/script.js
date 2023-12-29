// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// avista 2.5%
// 2x até 5x preço de tabela sem desconto
// 6x até 10x juros de 6% sobre o preço da tabela
// 11x até 15x juros de 13% sobre o preço da tabela

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.


let preco = Number(prompt('digite o preco doproduto'));
let parcela = Number(prompt('digite em quantas vezes voce quer fazer '));

if(parcela==1){
    document.write("o preço do produto é R$ ", (preco*0.975).toFixed(2), ".");
} else if(parcela>=2 && parcela<=5){
    document.write("o preço do produto é R$ ", (preco).toFixed(2), ".<br> A serem pagos em ", parcela, "x de R$ ", (preco/parcela).toFixed(2));
} else if(parcela>=6 && parcela<=10){
    document.write("o preço do produto é R$ ", (preco*1.06).toFixed(2), ".<br> A serem pagos em ", parcela, "x de R$ ", (preco*1.06/parcela).toFixed(2));
} else if(parcela>=11 && parcela<=15){
    document.write("o preço do produto é R$ ", (preco*1.13).toFixed(2), ".<br> A serem pagos em ", parcela, "x de R$ ", (preco*1.13/parcela).toFixed(2));
} else {
    document.write("Número de parcelas digitado é inválido!")
}