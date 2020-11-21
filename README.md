<h3>ToDo Task Manager</h3>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Running the app](#Running-the-app)
* [List of endpoints](#List-of-endpoints)
 

<!-- ABOUT THE PROJECT -->
## About The Project

Create-Read-Delete application using react(hooks), googleAuth, nodeJs, expressJs and mysql.
User can Add, Read and Delete its tasks.
There is one table in the db namely tasks that keeps the record of the task, taskid and userid in this application. 
Details about the user abstracted from its google account are name and its id associated with google account is used.
Every task is associated by the user who created it and can be fetched when the user logs in.

<!-- BUILT WITH -->
### Built With

ExpressJS is a framework for building efficient, scalable Node.js server-side applications. This application uses express as its base.
Data and information has been stored using mySql.
React, Redux and hooks are used for frontend.


<!-- RUNNING THE APP -->
## Running the app

Application starts at <b>http://localhost:3000/</b>
```bash
# frontend
$ cd client
$ npm start
# backend watch mode
$ cd server
# npm start

```
<!-- List of endpoints -->
## List of endpoints

<p>Following are various endpoints available</p>
<ul>
<li>GET/tasks/:userid ( fetch all tasks associated with the logged in user )</li>
<li>POST/addtask</li>
<li>DELETE/task/:taskid</li>
