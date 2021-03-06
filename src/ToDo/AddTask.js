import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

const AddTask = (props) => (
    <div>
        <div>
            <TextField
                type="text"
                value={props.newTaskText}
                onChange={props.onNewTaskTextChangeHandler}
                fullWidth={true}
            />
        </div>
        <div>
            <RaisedButton
                onClick={props.addTask}
                fullWidth={true}
            >
                Add task!
            </RaisedButton>
        </div>
    </div>
)

export default AddTask