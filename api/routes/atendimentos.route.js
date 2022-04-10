const { Router } = require("express");
const { Atendimento } = require("../models/atendimentos");
const { addAtendimento
    , getAtendimento
    , listAtendimentos
    , deleteAtendimento } = require("../dao/atendimentos");
const { v4: uuidv4 } = require('uuid');

const atendimentoRoute = Router();

atendimentoRoute.get("/atendimentos", async (req, res) => {

    const { id } = req.query;
    if (id) {
        const atendimento = await getAtendimento(id);
        return res.status(201).json(atendimento);
    } else {
        const result = await listAtendimentos();
        return res.status(200).json(result);
    }
});

atendimentoRoute.post("/atendimentos", (req, res) => {

    const { cliente, horario, observacoes } = req.body;
    const atendimento = new Atendimento(uuidv4(), cliente, horario, observacoes);

    addAtendimento(atendimento);

    return res.status(201).send({ msg: "Atendimento criado" })
})

atendimentoRoute.delete("/atendimentos/:id", (req, res) => {

    const { id } = req.params;

    deleteAtendimento(id);

    return res.status(202).send({ msg: "Atendimento excluidoinso" })
})

module.exports = { atendimentoRoute }