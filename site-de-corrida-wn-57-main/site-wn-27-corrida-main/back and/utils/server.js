const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("../routes/usuario");
const authRoutes = require("../routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

