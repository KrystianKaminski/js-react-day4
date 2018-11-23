import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

const style = {
    button: {
        margin: 12
    }
}

const Search = (props) => (
    <div>
        <div>
            <TextField
                type="text"
                placeholder="Filter tasks"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
            />
        </div>
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'ALL'}
                onClick={props.onAllClickHandler}
                primary={true}
                label="ALL"
                style={style.button}
            >
            </RaisedButton>
        </div>
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'COMPLETED'}
                onClick={props.onCompletedClickHandler}
                primary={true}
                label="COMPLETED"
                style={style.button}
            >
            </RaisedButton>
        </div>
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'UNCOMPLETED'}
                onClick={props.onUnCompletedClickHandler}
                primary={true}
                label="UNCOMPLETED"
                style={style.button}
            >
            </RaisedButton>
        </div>
    </div>
)

export default Search