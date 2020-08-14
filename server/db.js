const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'todomanager'
})

module.exports = connection.connect(err => {
    console.log(err)
})