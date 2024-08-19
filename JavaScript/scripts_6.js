console.log("Script 6 - Atividade Aula 6 - JavaScript")
/* Problema 6: Crie uma função para calcular o valor total de um pedido em uma lanchonete. A
função deve receber o valor total das compras e verificar se o valor é superior a R$200,00. Se
for, o cliente receberá um desconto de 10% no total. Caso contrário, não haverá desconto.
A função deve:
1. Solicitar ao usuário o valor total das compras (Você pode declarar uma variável já
contendo esse valor).
2. Calcular o desconto se o valor total exceder R$200,00.
3. Exibir o valor total com o desconto (se aplicável) e o valor do desconto.
Use as seguintes mensagens:
● Se o desconto for aplicado: "O valor total do pedido com desconto é
de R$ XX.XX", onde "O desconto aplicado foi de R$ YY.YY".
● Se não houver desconto: "O valor total do pedido é de R$ ZZ.ZZ".

Dica: Utilize estruturas condicionais, trabalhe com operadores e manipulação de dados
usando a lógica correta.*/

function lanchonete (a){
    // converter de string para número.
    let valor = Number(a);
    // Calcular o desconto se o valor total exceder R$200,00.
    if (valor > 200){
        let total = (valor * 1.1 );
        let desconto = (total - valor);
        // Exibir o valor total com o desconto (se aplicável) e o valor do desconto.
        console.log(`O valor total do pedido com desconto é de R$${total.toFixed(2)}, e o desconto aplicado foi de R$${desconto.toFixed(2)}`)
    } else {
        console.log(`O valor total do pedido é de R$${valor.toFixed(2)}.`);
    } 

}
    
console.log(lanchonete(210));
console.log(lanchonete(5000));
console.log(lanchonete(100));


// Segunda opção:
// Essa função pergunta ao usuário o valor da compra, e retorna o valor com e sem desconto, dependendo do total. 
// Caso o valor inserido pelo usuário não for um ínteger, a função vai continuar perguntando qual o foi valor total até um número ser inserido.

function snacks (){
    // perguntar ao usuário o valor final da compra na lanchonete
    
    let v = Number(prompt("Qual o valor total na lanchonete?"));
    
    // Calcular o desconto se o valor total exceder R$200,00.
    if (v > 200){
        let t = (v * 1.1 );
        let d = (t - v);
        // Exibir o valor total com o desconto (se aplicável) e o valor do desconto.
        console.log(`O valor total do pedido com desconto é de R$${t.toFixed(2)}, e o desconto aplicado foi de R$${d.toFixed(2)}`)
    } else if (v <= 200) { // o valor total é igual ou inferior a R$200 
        console.log(`O valor total do pedido é de R$${v.toFixed(2)}.`);
    } else {
        alert("You did not enter a number");
        snacks();
    }

}

console.log(snacks());
