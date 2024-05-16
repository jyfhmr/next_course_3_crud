export default function editUser(connection, id, name, last_name, age) {
    return new Promise((resolve, reject) => {
        // Ejecutar consulta SQL para actualizar el usuario
        connection.query('UPDATE users SET name = ?, last_name = ?, age = ? WHERE id = ?', [name, last_name, age, id], function (error, results, fields) {
            if (error) {
                console.error('Error al ejecutar la consulta: ' + error.stack);
                reject(error);
                return;
            }
            console.log('Usuario actualizado con éxito:', results.affectedRows);
            resolve(results.affectedRows);
        });
    });
}