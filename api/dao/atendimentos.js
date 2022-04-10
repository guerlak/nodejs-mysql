const { connection } = require("../infra/dbconnection");
const moment = require("moment");

const addAtendimento = (atendimento) => {

    const sql = 'insert into atendimentos set ?';
    const { horario } = atendimento;

    const formatedDate = moment(horario).format("YYYY-MM-DD HH:MM:SS")

    const atendimentoWithDate = { ...atendimento, horario: formatedDate }

    connection.query(sql, atendimentoWithDate, (err, resultSet) => {
        if (err) {
            return console.log(err)
        }
        console.log(resultSet)
    });
    return true;
}

const getAtendimento = async (id) => {

    const sql = 'select * from atendimentos where id = ?';

    const atendimento = await connection.promise().query(sql, id, (err, resultSet) => {
        if (err) {
            return console.log(err);
        }
        return resultSet;
    });

    console.log(atendimento[0])

    return atendimento[0];
}

const listAtendimentos = async () => {

    const sql = 'select * from atendimentos';
    const list = await connection.promise().query(sql);

    return list[0];
}

const deleteAtendimento = async (id) => {

    const sql = 'delete from atendimentos where id = ?';
    await connection.promise().query(sql, [id]);

}

module.exports = {
    addAtendimento,
    getAtendimento,
    listAtendimentos,
    deleteAtendimento
}

