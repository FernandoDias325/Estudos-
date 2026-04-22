// 1. Execução mínima

// Exiba uma mensagem de menu que aparece pelo menos uma vez antes de encerrar.
// Resposta:
let limite = 0;

do {
  limite++;
  console.log("Olá mundo!");
} while (limite < 1);

// 2. Validação de número positivo

// Peça um número até que ele seja maior que 0.
// Resposta:
const numeroCorreto = 5;
let numero = -1;

do {
  console.log("Número inválido. Informe um número maior que 0.");
  numero = 5;
} while (numero <= 0);

console.log("Número válido:", numero);

// 3. Tentativa de login

// Solicite usuário e senha até que estejam corretos.
// Resposta:
const senha = "1234";
let tentativa = "errado";

do {
  console.log("Digite sua senha");
  tentativa = "1234";
} while (tentativa !== senha);

console.log("Acesso liberado");

// 4. Contagem simples

// Exiba os números de 1 a 5 usando do...while.
// Resposta:
let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);

// 5. Soma com parada

// Some números informados até que o usuário digite -1.

// Resposta:
let num = 10;
let soma = 0;
do {
  soma += num;
  num--;
} while (num >= 0);
console.log(soma);
