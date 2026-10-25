const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_db'
});

connection.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    console.log(results);
});