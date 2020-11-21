import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { TaskCard } from './TaskCards';

const TaskManager = props => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTaskList();
  }, [props]);

  const onChange = e => setTask(e.target.value);

  const onDoneClick = () => console.log(`good for you`);

  const showSignInError = () => <div class="ui red message">You need to sign in first !</div>

  const onSubmitClick = () => {
    const { userId } = props;
    axios
      .post(`http://localhost:4000/addtask`, {
        task,
        userId,
      })
      .then(() => {
        getTaskList();
        setTask('');
      });
  };

  const getTaskList = () => {
    axios
      .get(`http://localhost:4000/tasks/${props.userId}`)
      .then((respose) => respose.data)
      .then((respose) => setTaskList(respose));
  };

  const onDeleteClick = taskid => {
    axios
      .delete(`http://localhost:4000/task/${taskid}`, {
        method: 'DELETE',
      })
      .then(() => getTaskList()); // fetching the updated list
  };

  const { isSignedIn, userName } = props;

  return !isSignedIn ? (
    showSignInError()
  ) : (
    <div>
      <h3 style={{ padding: `20px` }}>
        Hello 
        <span style={{ color: `#6185d3` }}> {userName}</span>! Add your task for
        today
      </h3>
      <div className="ui input">
        <input
          type="text"
          value={task}
          onChange={(e) => onChange(e)}
          placeholder="your task..."
        ></input>
      </div>
      <button
        className="ui primary basic button"
        onClick={() => onSubmitClick()}
      >
        Submit
      </button>
      <TaskCard
        onChange={onChange}
        onDeleteClick={onDeleteClick}
        onSubmitClick={onSubmitClick}
        taskList={taskList}
        task={task}
        onDoneClick={onDoneClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isSignedIn: auth.isSignedIn,
    userId: auth.userId,
    userName: auth.userName,
  };
};

export default connect(mapStateToProps)(TaskManager);
