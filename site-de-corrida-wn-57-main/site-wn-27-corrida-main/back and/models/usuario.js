let usuarios = [];

function criarUsuario(usuario) {

    usuario.id = usuarios.length + 1;

    usuarios.push(usuario);

    return usuario;
}


function listarUsuarios() {
    return usuarios;
}


function buscarPorEmail(email) {

    return usuarios.find(
        usuario => usuario.email === email
    );

}


module.exports = {
    criarUsuario,
    listarUsuarios,
    buscarPorEmail
};