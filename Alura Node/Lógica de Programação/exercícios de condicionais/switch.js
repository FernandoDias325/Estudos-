// =============================
// Exercícios com switch
// =============================

// 7. Dia da semana

// Um sistema recebe um número de 1 a 7 e precisa informar o dia correspondente.
// 1 → "Domingo"
// 2 → "Segunda-feira"
// 3 → "Terça-feira"
// 4 → "Quarta-feira"
// 5 → "Quinta-feira"
// 6 → "Sexta-feira"
// 7 → "Sábado"
// Outro valor → "Dia inválido"

// Resposta:

const dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

// 8. Status de pedido

// Um e-commerce precisa informar o status do pedido.
// Valores:
// "processando" → "Seu pedido está sendo preparado"
// "enviado" → "Seu pedido foi enviado"
// "entregue" → "Pedido entregue"
// Outro valor → "Status inválido"

// Resposta:

const status = "teste";

switch (status) {
  case "processando":
    console.log("Seu pedido está sendo preparado");
    break;
  case "enviado":
    console.log("Seu pedido foi enviado");
    break;
  case "entregue":
    console.log("Pedido entregue");
    break;
  default:
    console.log("Status inválido");
}

// 9. Tipo de usuário

// Um sistema possui diferentes níveis de acesso.
// Tipos:
// "admin" → "Acesso total"
// "usuario" → "Acesso limitado"
// "visitante" → "Acesso apenas para visualização"
// Outro → "Tipo inválido"

// Resposta:

const acesso = "usuario";

switch (acesso) {
  case "admin":
    console.log("Acesso total");
    break;
  case "usuario":
    console.log("Acesso Limitado");
    break;
  case "visitante":
    console.log("Acesso apenas para visualização!");
    break;
  default:
    console.log("Tipos inválidos");
}

// 10. Nível de bateria

// Um dispositivo informa o nível da bateria em categorias.
// Valores possíveis:
// "alto" → "Bateria cheia"
// "medio" → "Bateria moderada"
// "baixo" → "Bateria fraca"
// Outro valor → "Status desconhecido"

// Resposta:

const nivelBateria = "alto";

switch (nivelBateria) {
  case "alto":
    console.log("Bateria cheia");
    break;
  case "medio":
    console.log("Bateria moderada");
    break;
  case "baixo":
    console.log("Bateria fraca");
    break;
  default:
    console.log("Status desconhecido");
}
