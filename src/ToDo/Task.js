import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const completedStyle = {
    textDecoration: 'line-through'
}

const Task = (props) => (
    <div>
        <div
            onClick={() => props.completeTask(props.task.key)}
            style={props.task.isCompleted ? completedStyle : {}}
        >
            {props.task.taskText}
        </div>
        <RaisedButton
            secondary={true}
            onClick={() => props.deleteTask(props.task.key)}    
        >
            DELETE
        </RaisedButton>
    </div>
)

export default Task