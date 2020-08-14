import React, { useState, useCallback, useEffect } from 'react'
import TaskList from './taskList'

class TaskManager extends React.Component {
    state = {
        task: '',
        taskList: []
    }

    componentDidMount() {
        this.getTaskList()
    }

    onSubmitClick = () => {
        fetch(`http://localhost:4000/addtask?tasks='${this.state.task}'`)
        this.getTaskList()
        this.setState({task: ''})
    }

    getTaskList = () => {
        fetch('http://localhost:4000/tasks')
            .then(respose => respose.json())
            .then(respose => this.setState({ taskList: respose }))
    }

    onEditClick = (e) => {
        console.log('edit clicked')
    }

    onDeleteClick = (taskid) => {
        fetch(`http://localhost:4000/task/${taskid}`, {
            method: 'DELETE',
        })
        this.getTaskList()
    }

    render() {
        console.log(this.state.taskList)
        return (
            <div>
                <h4>Add your task for today</h4>
                <div className="ui input">
                    <input type='text' value={this.state.task} onChange={e => this.setState({ task: e.target.value })} placeholder='your task...'></input>
                </div>
                <button className="ui primary basic button" onClick={() => this.onSubmitClick()}>Submit</button>
                <hr />
                <h4>Task list</h4>
                <div className="ui cards">
                    {
                        this.state.taskList.map(task => <div className="card" >
                            <div className="content">
                                <div className="description">
                                    {task.tasks}
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui basic green button" onClick={e => this.ondoneClick()}>Done</div>
                                    <div className="ui basic red button" onClick={() => this.onDeleteClick(task.taskid)}>Delete</div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default TaskManager