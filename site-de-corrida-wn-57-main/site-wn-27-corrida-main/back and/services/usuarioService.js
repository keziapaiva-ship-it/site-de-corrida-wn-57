const usuarioModel = require("../models/usuario");

function cadastrar(usuario) {

    const existe = usuarioModel.buscarPorEmail(usuario.email);

    if (existe) {
        throw new Error("Email já cadastrado");
    }

    return usuarioModel.criarUsuario(usuario);
}


function listar() {
    return usuarioModel.listarUsuarios();
}


module.exports = {
    cadastrar,
    listar
};