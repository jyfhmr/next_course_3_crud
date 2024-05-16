export default function deleteUser(connection, id) {
    return new Promise((resolve, reject) => {
        // Ejecutar consulta SQL para eliminar el usuario
        connection.query('DELETE FROM users WHERE id = ?', [id], function (error, results, fields) {
            if (error) {
                console.error('Error al ejecutar la consulta: ' + error.stack);
                reject(error);
                return;
            }
            console.log('Usuario eliminado con éxito:', results.affectedRows);
            resolve(results.affectedRows);
        });
    });
}