const authService = require("../services/authService");

async function login(req, res) {
    try {
        const resultado = await authService.login(req.body);
        res.json(resultado);
    } catch (erro) {
        res.status(401).json({
            erro: erro.message
        });
    }
}

console.log("authController carregado", login);

module.exports = {
    login
};