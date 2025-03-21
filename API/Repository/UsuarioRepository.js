const { getConexao } = require("../config/database");

async function listar() {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM USUARIOS");
  await client.end();
  return result.rows;
}

async function inserir(user) {
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "INSERT INTO USUARIOS (username, senha) VALUES ($1, $2) RETURNING *",
    [user.username, user.senha]
  );
  await client.end();
  return result.rows;
}

async function buscarId(id) {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM USUARIOS WHERE ID = $1", [
    id,
  ]);
  await client.end();
  return result.rows[0];
}

async function buscarUsername(user) {
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "SELECT * FROM USUARIOS WHERE username = $1",
    [user.username]
  );
  await client.end();
  return result.rows[0];
}

module.exports = {
  listar,
  inserir,
  buscarId,
  buscarUsername,
};
