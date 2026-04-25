# Primeira Biblioteca — Contador de Palavras Duplicadas

Ferramenta de linha de comando (CLI) em Node.js que lê um arquivo de texto e identifica palavras repetidas em cada parágrafo, salvando o resultado em um novo arquivo.

---

## Funcionalidades

- Lê qualquer arquivo `.txt` como entrada
- Divide o texto por parágrafos
- Conta a frequência de cada palavra (ignorando palavras com menos de 3 letras e pontuação)
- Lista as palavras duplicadas por parágrafo
- Salva o resultado em um arquivo `resultado.txt` no destino indicado

---

## Tecnologias

- **Node.js** com ES Modules (`"type": "module"`)
- **[Commander.js](https://github.com/tj/commander.js/)** — para parsing de argumentos na CLI

---

## Instalação

```bash
npm install
```

---

## Uso

```bash
node src/cli.js --texto <caminho-do-arquivo> --destino <pasta-de-destino>
```

**Exemplo:**

```bash
node src/cli.js --texto arquivos/texto-web.txt --destino resultado
```

Isso vai gerar o arquivo `resultado/resultado.txt` com as palavras duplicadas encontradas.

---

## Estrutura do Projeto

```
Primeira Biblioteca/
├── arquivos/               # Textos de exemplo para processar
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── resultado/              # Pasta de saída padrão
│   └── resultado.txt
├── src/
│   ├── index.js            # Lógica principal (contaPalavras)
│   ├── cli.js              # Interface de linha de comando
│   ├── helpers.js          # Formatação da saída
│   └── erros/
│       └── funcoesErro.js  # Tratamento de erros
└── package.json
```

---

## Exemplo de Saída

```
Palavras duplicadas no parágrafo 3: uma
Palavras duplicadas no parágrafo 7: dispositivos, web, seu, conectado
Palavras duplicadas no parágrafo 8: cliente, uma, para
```
