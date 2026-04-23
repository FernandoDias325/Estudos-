// 16. Crie uma função que receba outra função como parâmetro e a execute

function executar(funcao) {
  funcao();
}
const saudacao = () => console.log(`Olá , tudo bem?`);

executar(saudacao);

// 17. Crie uma função que receba um nome e um callback, e execute o callback com mensagem personalizada

function executarComNome(nome, callback) {
  const mensagem = `Olá ${nome}, seja bem-vindo!`;
  callback(mensagem);
}
const mostrarMensagem = (msg) => {
  console.log(msg);
};
executarComNome("Fernando", mostrarMensagem);
