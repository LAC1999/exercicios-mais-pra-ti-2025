const numeroAleatorio = Math.floor(Math.random() * (100-1 +1))+1;
//console.log(numeroAleatorio);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let adivinho = 0;

async function adivinhar() {
  while (adivinho !== numeroAleatorio) {
    adivinho = await new Promise((resolve) => {
      rl.question('Tente adivinhar o número aleatório de 1 a 100\n', (input) => {
        resolve(parseInt(input, 10));
      });
    });

    if (adivinho === numeroAleatorio) {
      console.log('Acertou!\n');
      rl.close();  // Close the readline interface when guessed correctly
    } else if (adivinho > numeroAleatorio) {
      console.log('Tente um número menor.');
    } else {
      console.log('Tente um número maior.');
    }
  }
}

adivinhar();