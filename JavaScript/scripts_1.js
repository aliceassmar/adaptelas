console.log("Script 1 - Atividade Aula 6 - JavaScript")

// Função com dois parâmtros, um inteiro e um booleano, que determina se a pessoa pode dirigir ou não.


function dirigir(a, b){
    
    if (a >= 18 && b == "s"){
        console.log("Você está apto(a) a dirigir")
    } else {
        console.log("Você não está apto(a) a dirigir")
    }
}

console.log(dirigir(18, "s")) // Deve retornar "Você está apto(a) a dirigir"

console.log(dirigir(17, "n")) // Deve retornar "Você não está apto(a) a dirigir"

console.log(dirigir(22, "s")) // Deve retornar "Você está apto(a) a dirigir"

console.log(dirigir(22, "n")) // Deve retornar "Você não está apto(a) a dirigir"

// Segunda opção é chamar a função driving(), e a resposta do usuário vai ser solicitada.

function driving(){
    let idade = prompt("Idade: ");
    let habilitação = prompt("Tem habilitação (s/n)? ");

    if (idade >= 18 && habilitação == "s"){
        console.log("Você está apto(a) a dirigir")
    } else {
        console.log("Você não está apto(a) a dirigir")
    }
}



