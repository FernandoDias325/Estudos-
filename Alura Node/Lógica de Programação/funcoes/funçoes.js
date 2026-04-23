// 1. Crie uma função que exiba "Olá, mundo!"
function saudacao() {
  return "Olá, mundo!";
}
console.log(saudacao());

// 2. Crie uma função que receba um nome e exiba uma saudação
function saudacao(nome) {
  return `${nome}, Bom dia!`;
}
console.log(saudacao("Fernando"));

// 3. Crie uma função que receba dois números e retorne a soma

function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(5, 5));

// 4. Crie uma função que verifique se uma pessoa é maior de idade

function validar(idade) {
  if (idade >= 18) {
    return "É maior de idade";
  } else {
    return "É menor de idade";
  }
}
console.log(validar(18));

// 5. Crie uma função que verifique se um número é par ou ímpar
function parOuimpar(num) {
  return num % 2 === 0 ? "O número é par" : "O número é ímpar";
}
console.log(parOuimpar(3));
