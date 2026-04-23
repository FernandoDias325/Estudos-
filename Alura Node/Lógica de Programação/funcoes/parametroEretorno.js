// 1. Crie uma função que calcule a média de duas notas

function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}
console.log(media(15, 15));

// 2. Crie uma função que aplique desconto em um valor

function desconto(valor) {
  return valor * 0.9; // 10% de desconto.
}
console.log("O valor após o desconto é:", desconto(100));

// 3. Crie uma função que retorne o dobro de um número

function dobro(num) {
  return num * 2;
}
console.log(dobro(100));

// 4. Crie uma função que classifique uma nota (aprovado/reprovado)

function avaliador(nota) {
  return nota >= 7 ? "Aprovado" : "Reprovado";
}
console.log(avaliador(8));

// 5. Crie uma função que receba nome e idade e retorne uma frase
function frase(nome, idade) {
  return `Boa tarde ${nome}, você tem ${idade}?`;
}
console.log(frase("Fernando", 26));
