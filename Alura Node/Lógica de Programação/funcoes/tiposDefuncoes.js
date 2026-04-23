// 1. Reescreva a soma usando expressão de função

const soma = function (num1, num2) {
  return num1 + num2;
};
console.log(soma(2, 5));

// 2. Crie uma arrow function que retorne o dobro de um número

const dobro = (num) => num * 2;
console.log(dobro(2));

// 3. Crie uma arrow function que retorne o maior entre dois números

const maior = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(maior(6, 5));

// 4. Crie uma arrow function que retorne uma saudação com nome

const saudacao = (nome) => `Bom dia ${nome}!`;
console.log(saudacao("Fernando"));

// 5. Crie uma função que verifique se um número é positivo

const validacao = (num) =>
  num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero";

console.log(validacao(-1));
