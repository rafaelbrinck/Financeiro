const express = require("express");
const app = express();
const PORT = 3000;

const usuarioRouter = require("./Router/UsuarioRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Página Inicial");
});

app.use(function (req, res, next) {
  console.log(req.method + " - " + req.originalUrl);
  next();
});
app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`);
});

app.use("/api/usuarios", usuarioRouter);
