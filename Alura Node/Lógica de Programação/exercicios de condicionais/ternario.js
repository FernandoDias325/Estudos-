// =============================
// Operador Ternário.
// =============================

// 1. Maioridade

// Crie um programa que receba uma idade e use operador ternário para definir:
// Se idade ≥ 18 → "Maior de idade"
// Caso contrário → "Menor de idade"

// Resposta:
const idade = 18;

const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// 2. Número positivo ou negativo

// Receba um número e use ternário para exibir:
// Se o número for maior ou igual a 0 → "Positivo"
// Caso contrário → "Negativo"

// Resposta:
const num = 0;

const resultadoNum = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "zero";
console.log(`O número ${num}, é ${resultadoNum}!`);

// 3. Aprovação de nota

// Receba uma nota e use ternário:
// Se nota ≥ 7 → "Aprovado"
// Caso contrário → "Reprovado"

// Resposta:
const nota = 6.9;
const resultadoNota = nota >= 7 ? "Aprovado(a)" : "Reprovado(a)";
console.log(`Com nota ${nota}, você está ${resultadoNota}.`);

// 4. Verificação de login simples

// Crie duas variáveis:
// usuario
// senha
// Use ternário para verificar:
// Se usuario === "admin" e senha === "1234" → "Login permitido"
// Caso contrário → "Login negado"

// Resposta:
const usuario = "admin";
const senha = "1234";

const validacao =
  usuario === "admin" && senha === "1234" ? "Login permitido" : "Login negado";
console.log(validacao);

// 5. Verificação de número par ou ímpar

// Receba um número e use ternário para exibir:
// Se o número for par → "Par"
// Caso contrário → "Ímpar"
// Dica: use o operador %

// Resposta:

const valor = 5;

const valida = valor % 2 === 0 ? "Par" : "Ímpar";
console.log(`O número ${valor} é ${valida}!`);
