<h3><a href="https://drive.google.com/file/d/1t2OZOIW5icL7oexs1z8l_W0mSgqKOMqJ/view?usp=sharing">ToDo Task Manager<a/></h3>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Running the app](#Running-the-app)
* [List of endpoints](#List-of-endpoints)
 

<!-- ABOUT THE PROJECT -->
## About The Project

A simple Create-Read-Delete application using react(hooks), googleAuth, nodeJs, expressJs and mysql.<br>
User needs to be Logged in first to add any tasks.<br>
User can Add, View and Delete its tasks.<br>
Details about the user abstracted from its google account are name and its id associated with google account is used.<br>
Every task is associated by the user who created it and is fetched when the user logs in.<br>
<i>Although the project needs to be set up locally to see its execution, you can find a video for its execution <a href="https://drive.google.com/file/d/1t2OZOIW5icL7oexs1z8l_W0mSgqKOMqJ/view?usp=sharing">here</a></i>

<!-- BUILT WITH -->
### Built With

ExpressJS is a framework for building efficient, scalable Node.js server-side applications. <br>This application uses expres.<br>
Data and information has been stored using mySql.<br>
React, Redux and hooks are used for frontend.<br>


<!-- RUNNING THE APP -->
## Running the app

Application starts at <b>http://localhost:3000/</b>
```bash
# frontend
$ cd client
$ npm start
# backend watch mode
$ cd server
$ npm start

```
<!-- List of endpoints -->
## List of endpoints

<p>Following are various endpoints available</p>
<ul>
<li>GET/tasks/:userid ( fetch all tasks associated with the logged in user )</li>
<li>POST/addtask</li>
<li>DELETE/task/:taskid</li>
