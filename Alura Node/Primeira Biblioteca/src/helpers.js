function filtraOcorrencias(paragrafos) {
  return Object.keys(paragrafos).filter((chave) => paragrafos[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(", ");
    if (duplicadas.length > 0) {
      textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`;
    }
  });
  return textoFinal;
}
export { montaSaidaArquivo };
