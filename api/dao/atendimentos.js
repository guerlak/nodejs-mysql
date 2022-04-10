const { connection } = require("../infra/dbconnection");

const addAtendimento = (atendimento) => {

    const sql = 'insert into atendimentos set ?';

    connection.query(sql, atendimento, (err, resultSet) => {
        if (err) {
            return console.log(err)
        }
        console.log(resultSet)
    });

    return true;
}


module.exports = {
    addAtendimento
}

