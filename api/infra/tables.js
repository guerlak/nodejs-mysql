class Tables {

    init(connection) {
        this.connection = connection;
        console.log("Tables were called...")
    }

    createAtendimentoTable() {

        const sql = 'create table if not exists atendimentos(id varchar(255) NOT NULL, cliente varchar(255) NOT NULL, ' +
            'horario DATETIME NOT NULL, observacoes TEXT,  created_at DATETIME NOT NULL, updated_at DATETIME, ' +
            'PRIMARY KEY(id))'

        this.connection.query(sql, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log("Table created")

        })
    }
}

module.exports = { Tables }