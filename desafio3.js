const readlineSync = require('readline-sync');

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "atacou";
        }
        console.log(`O ${this.nome}, do tipo ${this.tipo}, ${ataque}.`);
    }
}

let nome = readlineSync.question("Digite o NOME do Herói: ");
let idade = readlineSync.question(`Digite a IDADE do ${nome}: `);
let tipo = readlineSync.question(`Digite o TIPO do ${nome} (mago, guerreiro, monge, ninja): `);

const heroi1 = new heroi(nome, idade, tipo);
heroi1.atacar();