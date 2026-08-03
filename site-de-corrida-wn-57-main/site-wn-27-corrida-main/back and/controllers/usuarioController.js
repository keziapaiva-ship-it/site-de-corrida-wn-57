const usuarioModel = require("../models/usuarioModel");

function cadastrar(dados) {

    if (!dados.nome || !dados.email || !dados.senha) {
        throw new Error("Preencha todos os campos.");
    }

    const existe = usuarioModel.buscarPorEmail(dados.email);

    if (existe) {
        throw new Error("E-mail já cadastrado.");
    }

    return usuarioModel.criarUsuario(dados);
}

function listar() {
    return usuarioModel.listarUsuarios();
}

module.exports = {
    cadastrar,
    listar
};