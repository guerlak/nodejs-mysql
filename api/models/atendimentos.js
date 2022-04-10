class Atendimento {

    constructor(id, cliente, horario, observacoes) {
        this.id = id;
        this.cliente = cliente;
        this.horario = horario;
        this.observacoes = observacoes;
        this.created_at = new Date();
    }

}

module.exports = { Atendimento };