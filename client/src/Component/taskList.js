import React from 'react'

class Tasklist extends React.Component {

    onEditClick = (e) => {
        console.log('edit clicked')
    }

    onDeleteClick = (e) => {
        console.log('delte clicked')
    }

    render() {
        return (
            <div>
                <div className="ui cards">
                    {
                        this.props.tasklist.map(task => <div className="card" >
                            <div className="content">
                                <div className="description">
                                    {task.tasks}
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui basic green button" onClick={e => this.onEditClick()}>Edit</div>
                                    <div className="ui basic red button" onClick={e => this.onDeleteClick()}>Delete</div>
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

export default Tasklist