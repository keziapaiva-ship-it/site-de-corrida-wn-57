const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("../routes/usuario");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});