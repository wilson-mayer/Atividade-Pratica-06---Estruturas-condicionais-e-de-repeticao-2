// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

let idade = Number(prompt("Digite a idade: "))



if(idade >= 18 && idade <= 67){
    document.write("Pode doar sangue")
}else{
    document.write("Não pode doar sangue")
}