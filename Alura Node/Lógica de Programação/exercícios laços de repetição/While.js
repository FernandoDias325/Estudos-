// 1. Contagem crescente

// Exiba os números de 1 até 10 usando while.
// Respopsta:

let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}

// 2. Contagem regressiva

// Exiba os números de 10 até 0 usando while.
// Resposta:
let numRegressivo = 10;

while (numRegressivo >= 0) {
  console.log(numRegressivo);
  numRegressivo--;
}

// 3. Soma até limite

// Some números a partir de 1 até que o total ultrapasse 50.
// Resposta:

let numero = 1;
let soma = 0;
while (numero <= 50) {
  soma += numero;
  numero++;
}
console.log(soma);

// 4. Validação de senha

// Peça uma senha até que o usuário digite "1234".

// Resposta:

const senha = "1234";
let tentativa = "123";

while (tentativa !== senha) {
  console.log("Digite a senha correta!");

  tentativa = "1234";
}
console.log("Acesso liberado");

// 5. Parada por condição

// Peça números continuamente até o usuário digitar 0. Depois mostre o último valor digitado.

// Resposta:
let numero = 10;
while (numero !== 0) {
  console.log(numero);

  numero--;
}

// 6. Exibir múltiplos de 3

// Exiba os números de 1 até 30 que são divisíveis por 3.

// Resposta:
let numeros = 1;
while (numeros <= 30) {
  if (numeros % 3 === 0) {
    console.log(numeros);
  }
  numeros++;
}

// 7. Contador de pares

// Conte quantos números pares existem entre 1 e 50 e exiba o total.
// Resposta:
let numEx12 = 1;
let totalPares = 0;
while (numEx12 <= 50) {
  if (numEx12 % 2 === 0) {
    totalPares += numEx12;
  }
  numEx12++;
}
console.log(totalPares);

// 8. Soma apenas dos ímpares

// Some todos os números ímpares de 1 até 50 e exiba o resultado.
// Resposta:
let valor1 = 1;
let totalImpares = 0;

while (valor1 <= 50) {
  if (valor1 % 2 !== 0) {
    totalImpares += valor1;
  }
  valor1++;
}
console.log(totalImpares);
