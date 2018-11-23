import React from 'react'

const Search = (props) => (
    <div>
        <div>
            <input
                type="text"
                placeholder="Filter tasks"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
            />
        </div>
        <div>
            <button
                disabled={props.chosenFilter === 'ALL'}
                onClick={props.onAllClickHandler}
            >
                ALL
            </button>
        </div>
        <div>
            <button
                disabled={props.chosenFilter === 'COMPLETED'}
                onClick={props.onCompletedClickHandler}
            >
                COMPLETED
            </button>
        </div>
        <div>
            <button
                disabled={props.chosenFilter === 'UNCOMPLETED'}
                onClick={props.onUnCompletedClickHandler}
            >
                UNCOMPLETED
            </button>
        </div>
    </div>
)

export default Search