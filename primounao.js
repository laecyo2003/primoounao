/* Criar um algoritmo em JavaScript que, ao receber a entrada de um número inteiro, identifica se aquele número é primo ou não;
Na saída, deve constar o "veredito" sobre a "primicidade" do número inserido pelo usuário, assim como todos os divisores desse número inserido*/

var N = parseInt(prompt("Digite um número para descobrir se ele é primo ou não"));
var QuantidadeDivisoresN = 0;
var DivisoresN = "";
var i = 1;
for (i = 1; i <= N; i++){
    if (N%i === 0){
        QuantidadeDivisoresN = QuantidadeDivisoresN + 1; // Mesma coisa de QuantidadeDivisoresN++
        DivisoresN += i + ", "; // Mesma coisa de DivisoresN = DivisoresN + i
    }
}
if (QuantidadeDivisoresN === 2){
    alert (`O número ${N} é primo.\n Seus divisores são: {${DivisoresN}}`);
}else{
    alert (`O número ${N} não é primo.\n Seus divisores são: {${DivisoresN}}`);
}