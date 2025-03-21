const { Client } = require("pg");
require("dotenv").config();

const conexao = {
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "banco",
  database: "AppProjeto",
};

function getConexao() {
  return new Client(conexao);
}

module.exports = { getConexao };
