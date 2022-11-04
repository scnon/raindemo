var mysql = require('mysql');

exports.test = function () {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: '123456',
        database: 'mysql'
    });
    connection.connect();

    connection.query('SELECT * from user;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
}