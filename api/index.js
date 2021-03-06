const express = require('express');
require('dotenv/config');
const { atendimentoRoute } = require("./routes/atendimentos.route.js")
const { Tables } = require("./infra/tables")

const { connection } = require("./infra/dbconnection.js");

connection.connect(err => {
    if (err) {
        console.log(err)
    } else {

        const tables = new Tables();
        tables.init(connection);
        tables.createAtendimentoTable();

        const app = express();
        app.use(express.json())

        app.listen(3000, () => {
            console.log("App running on port 3000")
        });

        app.use("/", atendimentoRoute)
    }

})

