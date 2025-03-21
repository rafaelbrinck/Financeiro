const usuarioRepository = require("../Repository/UsuarioRepository");

async function listar() {
  return await usuarioRepository.listar();
}

async function inserir(user) {
  if (!user || !user.username || !user.senha) {
    throw { id: 400, msg: "Dados importantes faltando" };
  }
  try {
    return await usuarioRepository.inserir(user);
  } catch (err) {
    throw { id: 404, msg: "Problema no servidor" };
  }
}

async function buscarId(id) {
  if (!id) {
    throw { id: 400, msg: "ID não informado" };
  }
  try {
    const userBuscado = await usuarioRepository.buscarId(id);
    if (userBuscado == undefined) {
      throw { id: 400, msg: "Usuário inexistente" };
    }
    return userBuscado;
  } catch (err) {
    throw { id: err.id, msg: err.msg };
  }
}
async function buscarUsername(user) {
  if (!user || !user.username) {
    throw { id: 400, msg: "Username não informado" };
  }
  try {
    const userBuscado = await usuarioRepository.buscarUsername(user);
    if (userBuscado == undefined) {
      throw { id: 400, msg: "Usuário inexistente" };
    }
    return userBuscado;
  } catch (err) {
    throw { id: err.id, msg: err.msg };
  }
}

module.exports = {
  listar,
  inserir,
  buscarId,
  buscarUsername,
};
