const { Client } = require("pg");
require("dotenv").config({ path: "./infos.env" });

const conexao = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

function getConexao() {
  return new Client(conexao);
}

module.exports = { getConexao };
