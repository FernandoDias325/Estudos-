// 1. Contagem crescente

// Exiba os números de 1 a 10 usando for.

// Responsta:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Contagem regressiva

// Exiba os números de 10 até 0.

// Responsta:

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// 3. Números pares

// Exiba apenas os números pares de 1 a 20.

// Responsta:

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Tabuada

// Receba um número e exiba a tabuada dele de 1 a 10.

// Responsta:

const tabuada = 2;

for (let i = 1; i <= 10; i++) {
  const resultado = tabuada * i;
  console.log(`${tabuada} x ${i} = ${resultado}`);
}

// 5. Soma simples

// Some os números de 1 a 100 e exiba o resultado final.
// Responsta:

let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);
