const { Router } = require("express");
const { Atendimento } = require("../models/atendimentos");
const { addAtendimento } = require("../dao/atendimentos");

const route = Router();

route.get("/atendimentos", (req, res) => {
    return res.send("Rotas de atendiemnto")
})

route.post("/atendimentos", (req, res) => {

    const { cliente, horario, observacoes } = req.body;

    const atendimento = new Atendimento("125", cliente, horario, observacoes);

    addAtendimento(atendimento);

    return res.send("Rota de criação de atendimento")
})

module.exports = { route }