const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usuarioModel = require("../models/usuario");


async function login(dados) {

    const usuario = usuarioModel.buscarPorEmail(dados.email);

    if (!usuario) {
        throw new Error("Usuário não encontrado");
    }


    const senhaValida = await bcrypt.compare(
        dados.senha,
        usuario.senha
    );


    if (!senhaValida) {
        throw new Error("Senha incorreta");
    }


    const token = jwt.sign(
        {
            id: usuario.id,
            email: usuario.email
        },
        "wn57_secret_key",
        {
            expiresIn: "1h"
        }
    );


    return {
        mensagem: "Login realizado",
        token
    };
}


module.exports = {
    login
};