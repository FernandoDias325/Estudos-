// 1. Exiba todos os nomes de um array usando for...of

const nomes = ["João", "Maria", "Jurema", "Thay", "Sid"];
for (const nome of nomes) {
  console.log(nome);
}

// 2. Exiba cada número de um array em uma nova linha

const numeros = [12, 13, 14, 15, 16];

for (const num of numeros) {
  console.log(num);
}

// 3. Some todos os valores usando for...of

const numeros = [12, 13, 14, 15, 16];
let soma = 0;
for (const num of numeros) {
  soma += num;
}
console.log(soma);

// 4. Exiba apenas números maiores que 10
const numeros = [1, 2, 3, 12, 13, 14, 15, 16];

for (const maior of numeros) {
  if (maior > 10) {
    console.log(maior);
  }
}
