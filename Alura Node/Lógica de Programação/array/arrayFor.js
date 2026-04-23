// 1. Percorra um array de números e exiba todos os valores

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// 2. Some todos os números de um array usando for

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

// 3. Encontre o maior número de um array usando for

const valor = [2, 4, 6, 10, 8, 30, 1];
let maior = valor[0];
for (let i = 0; i < valor.length; i++) {
  if (valor[i] > maior) {
    maior = valor[i];
  }
}
console.log(maior);

// 4. Exiba apenas os números pares de um array

const n = [1, 43, 48, 98, 74, 23, 546, 48645, 54878, 34164, 131581, 13543];
for (let i = 0; i < n.length; i++) {
  if (n[i] % 2 === 0) {
    console.log(n[i]);
  }
}

// 5. Exiba cada elemento multiplicado por 2

const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < elementos.length; i++) {
  console.log(elementos[i] * 2);
}
