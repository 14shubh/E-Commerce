const mysql = require('mysql');
module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    connectionLimit: 100,
    database: 'database name'
});