export default function getUsers(connection) {
    return new Promise((resolve, reject) => {
        // Ejecutar consulta SQL
        connection.query('SELECT * FROM users', function (error, results, fields) {
            if (error) {
                console.error('Error al ejecutar la consulta: ' + error.stack);
                reject(error);
                return;
            }
            console.log('Número de usuarios encontrados:', results.length);
            console.log('Los resultados son: ', results);
            resolve(results);
        });
    });
}
