const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'next_crud'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }

    console.log('Conectado como desde connect module ' + connection.threadId);
});

module.exports = connection;

