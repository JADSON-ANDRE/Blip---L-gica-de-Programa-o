const readlineSync = require('readline-sync');

let heroi = readlineSync.question("Digite o NOME do Herói: ")
let vitoria = readlineSync.question("Qual o número de vitórias do " + heroi + "? ")
let derrota = readlineSync.question("Qual o número de derrotas do " + heroi + "? ")

calculaSaldo (vitoria, derrota)

if (saldo < 10) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Ferro.")
else if (saldo <= 20) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Bronze.")
else if (saldo <= 50) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Prata.")
else if (saldo <= 80) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Ouro.")
else if (saldo <= 90) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Diamante.")
else if (saldo <= 100) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Lendário.")
else if (saldo > 100) console.log("O " + heroi.toUpperCase() + " tem saldo de " + saldo + " e está no nível de Imortal.")


function calculaSaldo (vitoria, derrota) {
    if (vitoria < 0 || derrota < 0) {
        console.error("Número de vitórias ou derrotas inválido!")
        process.exit(1)
    }
    return saldo = vitoria - derrota
}