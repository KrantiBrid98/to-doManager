const express = require('express')
const cors = require('cors')
const sql = require('mysql2')

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'todomanager'
})

const app = express();
app.use(cors())


// get all tasks
app.get('/tasks', (req, res) => {
    const SELECT_ALL_TASKS = 'SELECT * from tasks';
    connection.query(SELECT_ALL_TASKS, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/addtask', (req, res) => {
    console.log(req.query.tasks,'req.query.tasks')
    const ADD_TASK = `INSERT INTO tasks (tasks) VALUES (${req.query.tasks})`;
    connection.query(ADD_TASK, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('added')
        }       
    })
})

app.delete('/task/:task', (req,res)=>{
    const DELETE_TASK = `DELETE FROM tasks WHERE (taskid = ${req.params.task});`
    connection.query(DELETE_TASK,(err, result)=>{
        if (err) {
            console.log(err)
        } else {
            res.send('delted')
        } 
    })      
})

app.listen(4000, () => {
    console.log('server up')
})