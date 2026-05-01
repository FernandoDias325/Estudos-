import express from "express";

const app = express();

const livros = [
  {
    id: 1,
    titulo: "O senhos dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});
export default app;
