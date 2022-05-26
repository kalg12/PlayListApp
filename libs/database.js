const mysql = require('mysql2');
const { dbHost, dbUser, dbPort, dbPassword, dbName } = require('../config');

const connection = mysql.createConnection({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName
});