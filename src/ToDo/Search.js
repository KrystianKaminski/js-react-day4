import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

const style = {
    button: {
        paddingBottom: 20
    }
}

const Search = (props) => (
    <div>
        <div>
            <TextField
                type="text"
                floatingLabelText="Filter tasks"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
                fullWidth={true}
            />
        </div>
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'ALL'}
                onClick={props.onAllClickHandler}
                primary={true}
                label="ALL"
                style={style.button}
                fullWidth={true}
            />
        </div>
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'COMPLETED'}
                onClick={props.onCompletedClickHandler}
                primary={true}
                label="COMPLETED"
                style={style.button}
                fullWidth={true}
            />
        </div>
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'UNCOMPLETED'}
                onClick={props.onUnCompletedClickHandler}
                primary={true}
                label="UNCOMPLETED"
                style={style.button}
                fullWidth={true}
            />
        </div>
    </div>
)

export default Search