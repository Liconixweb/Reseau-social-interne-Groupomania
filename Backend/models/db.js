const mysql = require('mysql');
const { database } = require('../config/db.config');
const dbConfig = require('../config/db.config');

//Connexion à la base de données
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

connection.connect((error) => {
    if (error) throw error;
    console.log("Connexion avec succès à la DB !");
});

module.exports = connection;