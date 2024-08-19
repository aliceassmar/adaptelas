console.log("Script 2 - Atividade Aula 6 - JavaScript")

/* Problema 2: Crie uma função que contém dois números inteiros como parâmetros (a, b) e
determine qual deles é o maior. A função deve retornar uma mensagem dizendo qual número
é o maior ou se ambos são iguais. A função deve exibir as seguintes mensagens em seus
devidos casos:
● Se o primeiro número é maior: "O número 5 é maior que 2."
● Se o segundo número é maior: "O número 2 é menor que 5."
● Se os números forem iguais: "Os dois números são iguais."

Dica: Utilize estruturas condicionais e tenha em mente que o primeiro número é o valor
passado para a, e o segundo é o valor passado para b.*/

// Funções
function maiorque(a, b){  
    if (a > b){
        console.log(`O número ${a} é maior que ${b}.`);
    } else if (a < b){
        console.log(`O número ${a} é menor que ${b}.`);
    } else {
        console.log(`Os dois números são iguais.`);
    }
}

console.log(maiorque(5, 2)); // O número 5 é maior que 2.

console.log(maiorque(10, 5)); // O número 10 é maior que 5.

console.log(maiorque(5, 12)); // O número 5 é menor que 12.

console.log(maiorque(5, 5)); // Os dois números são iguais.
