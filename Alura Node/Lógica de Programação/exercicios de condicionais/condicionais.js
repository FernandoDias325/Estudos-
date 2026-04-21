// =============================
// Exercícios com if / else
// =============================

// 1. Controle de acesso por idade

// Um sistema de evento precisa validar a entrada de participantes.
// Receba a idade de uma pessoa:
// Se for maior ou igual a 18 → "Entrada permitida"
// Caso contrário → "Entrada proibida"

// Resposta:

const idade = 17;

if (idade >= 18) {
  console.log(`Você tem ${idade} anos. Sua entrada é permitida!`);
} else {
  console.log(`Você tem ${idade} anos. Sua entrada é proibida`);
}

// 2. Verificação de saldo

// Um banco precisa verificar se um cliente possui saldo disponível.
// Receba o saldo:
// Se for maior que 0 → "Saldo disponível"
// Caso contrário → "Saldo insuficiente"

// Resposta:

const saldo = 10;

if (saldo > 0) {
  console.log(`Você tem um saldo disponível de R$: ${saldo.toFixed(2)}.`);
} else {
  console.log("Seu saldo é insuficiente!");
}

// 3. Classificação de temperatura

// Um aplicativo precisa classificar a temperatura ambiente.
// Receba a temperatura:
// Abaixo de 15 → "Frio"
// Entre 15 e 25 → "Agradável"
// Acima de 25 → "Quente"

// Resposta:

const temperatura = 24;

if (temperatura < 15) {
  console.log(`A temperatura está em ${temperatura}°C. Está frio!`);
} else if (temperatura < 25) {
  console.log(`A temperatura está em ${temperatura}°C. Está agradável!`);
} else {
  console.log(`A temperatura está em ${temperatura}°C. Está quente!`);
}

// 4. Validação de login

// Um sistema simples de autenticação precisa validar acesso.
// Dados:
// Usuário correto: "admin"
// Senha correta: "1234"
// Regra:
// Se ambos estiverem corretos → "Login realizado com sucesso"
// Caso contrário → "Usuário ou senha inválidos"

// Resposta:

const usuario = "admin";
const senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso");
} else {
  console.log("Usuário ou senha inválidos");
}

// 5. Permissão para dirigir

// Um sistema precisa verificar se uma pessoa pode dirigir.
// Dados:
// Idade
// Possui carteira (true/false)
// Regra:
// Se idade ≥ 18 e possui carteira → "Pode dirigir"
// Caso contrário → "Não pode dirigir"

// Resposta:

const idadeMinima = 18;

const idadeUser = 18;
const temCnh = true;

let mensagem = "";

if (idadeUser >= idadeMinima && temCnh) {
  mensagem = "Pode dirigir!";
} else {
  mensagem = "Não pode dirigir!";
}

console.log(mensagem);

// 6. Sistema de notas

// Uma escola precisa classificar o desempenho dos alunos.
// Receba a nota:
// ≥ 7 → "Aprovado"
// Entre 5 e 6 → "Recuperação"
// < 5 → "Reprovado"

// Resposta:

const nota = 5;
let resultado = "";

if (nota >= 7) {
  resultado = "Aprovado";
} else if (nota >= 5) {
  resultado = "Recuperação";
} else {
  resultado = "Reprovado";
}

console.log(resultado);
