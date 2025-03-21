const express = require("express");
const router = express.Router();
const usuarioController = require("../Controller/UsuarioController");

router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarId);
router.post("/", usuarioController.inserir);
module.exports = router;
