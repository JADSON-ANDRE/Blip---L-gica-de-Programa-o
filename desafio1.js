const readlineSync = require('readline-sync');

let heroi = readlineSync.question("Digite o NOME do Herói: ")
let xp = readlineSync.question("Digite o XP do " + heroi + ": ")
let nivel

if (xp < 0) {
  console.error(xp + " é um valor inválido!")
  process.exit(1)
}

if (xp <= 1000) nivel = "Ferro"
else if (xp <= 2000) nivel = "Bronze"
else if (xp <= 5000) nivel = "Prata"
else if (xp <= 7000) nivel = "Ouro"
else if (xp <= 8000) nivel = "Platina"
else if (xp <= 9000) nivel = "Ascendente"
else if (xp <= 10000) nivel = "Imortal"
else if (xp >= 10001) nivel = "Radiante"

console.log("O herói de nome " + heroi.toUpperCase() + " está no nível de " + nivel + ".")