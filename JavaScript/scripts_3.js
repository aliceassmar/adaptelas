console.log("Script 3 - Atividade Aula 6 - JavaScript")
/* 
Problema 3: Crie uma função que recebe um número (x) como parâmetro e determine se ele
é impar ou par. A função deve exibir as seguintes mensagens em seus devidos casos.
● Caso o número seja par: “O número 2 é par.”
● Caso o número seja ímpar: “O número 25 é ímpar.”
Dica: Utilize estruturas condicionais e trabalhe com operadores.*/


function parouimpar(x){
    if (x % 2 == 0){
        console.log(`O número ${x} é par.`)
    } else {
        console.log(`O número ${x} é ímpar.`)
    }
}

console.log(parouimpar(10)); // O número 10 é par.
console.log(parouimpar(25)); // O número 25 é ímpar.
console.log(parouimpar(2)); // O número 2 é par.
console.log(parouimpar(360)); // O número 360 é ímpar.
console.log(parouimpar(655)); // O número 655 é ímpar.

// asking the user
function evenorodd(){
    let x = prompt("número: ");
   
    if (x % 2 == 0){
        console.log(`O número ${x} é par.`)
    } else {
        console.log(`O número ${x} é ímpar.`)
    }
}

// console.log(evenorodd());
