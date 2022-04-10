const db = require('mysql2');

const connection = db.createConnection({
    host: '0.0.0.0',
    port: '3306',
    user: 'root',
    password: "123456",
    database: "api_raw_mysql"
})


module.exports = { connection }