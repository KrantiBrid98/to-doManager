const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const connection = require(`./db`)

const app = express();
app.use(cors());
app.use(bodyParser.json());

// get all tasks
app.get('/tasks/:userid', (req, res) => {
  const SELECT_ALL_TASKS = `SELECT * FROM todotaskmanager.tasks where userid = ${req.params.userid} `;
  connection.query(SELECT_ALL_TASKS, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/addtask', (req, res) => {
  const ADD_TASK = `INSERT INTO tasks (task, userid) VALUES ('${req.body.task}', ${req.body.userId})`;
  console.log(ADD_TASK, `add tas`);
  connection.query(ADD_TASK, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('added');
    }
  });
});

app.delete('/task/:taskid', (req, res) => {
  const DELETE_TASK = `DELETE FROM tasks WHERE (taskid = ${req.params.taskid});`;
  connection.query(DELETE_TASK, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('deleted');
    }
  });
});

app.listen(4000, () => {
  console.log('server up');
});
