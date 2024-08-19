console.log("Script 4 - Atividade Aula 6 - JavaScript")
/* Problema 4: Crie uma função que recebe um número como parâmetro e decrementa esse
número de 1 em 1.
Ao passar o número 5 como parâmetro da função, ela deve exibir no console:
4
3
2
1
0
Dica: Utilize laços de repetição (For ou While).*/

const contagemregressiva = function(a){
    let valor = 0;
    while(valor < a) {
        console.log(a - 1)
        a--
    }
}

console.log(contagemregressiva(5)); // 4 3 2 1 0

console.log(contagemregressiva(2)); // 1 0

console.log(contagemregressiva(10)); // 9 8 7 6 5 4 3 2 1 0

console.log(contagemregressiva(11)); // 10 9 8 7 6 5 4 3 2 1 0