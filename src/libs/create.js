export default function createUser(connection, name, last_name, age) {
    return new Promise((resolve, reject) => {
        // Ejecutar consulta SQL para insertar un nuevo usuario
        connection.query('INSERT INTO users (name, last_name, age) VALUES (?, ?, ?)', [name, last_name, age], function (error, results, fields) {
            if (error) {
                console.error('Error al ejecutar la consulta: ' + error.stack);
                reject(error);
                return;
            }
            console.log('Usuario creado con éxito:', results.insertId);
            resolve(results.insertId);
        });
    });
}
