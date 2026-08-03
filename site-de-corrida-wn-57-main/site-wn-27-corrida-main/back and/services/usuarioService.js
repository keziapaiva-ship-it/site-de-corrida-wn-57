const bcrypt = require("bcrypt");
const usuarioModel = require("../models/usuario");

async function cadastrar(usuario) {

    const existe = usuarioModel.buscarPorEmail(usuario.email);

    if (existe) {
        throw new Error("Email já cadastrado");
    }

    const senhaCriptografada = await bcrypt.hash(usuario.senha, 10);

    usuario.senha = senhaCriptografada;

    return usuarioModel.criarUsuario(usuario);
}

function listar() {
    return usuarioModel.listarUsuarios();
}

module.exports = {
    cadastrar,
    listar
};