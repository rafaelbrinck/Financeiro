const usuarioService = require("../Service/UsuarioService");

async function listar(req, res) {
  const user = req.body;
  try {
    if (!user || !user.username) {
      const usuarios = await usuarioService.listar();
      res.status(201).json(usuarios);
    } else {
      const userBuscado = await usuarioService.buscarUsername(user);
      res.status(201).json(userBuscado);
    }
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function inserir(req, res) {
  const user = req.body;
  try {
    const userInserido = await usuarioService.inserir(user);
    res.status(201).json(userInserido);
  } catch (err) {
    res.status(err.id).json(err);
  }
}
async function buscarId(req, res) {
  const id = req.params.id;
  try {
    const userBuscado = await usuarioService.buscarId(id);
    res.status(201).json(userBuscado);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

module.exports = {
  listar,
  inserir,
  buscarId,
};
