import React from 'react'

const Search = (props) => (
    <div>
        <div>
            <input
                type="text"
                placeholder="Filter"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
            />
        </div>
        <div>
            <button
                onClick={props.onAllClickHandler}
            >
                ALL
            </button>
        </div>
        <div>
            <button
                onClick={props.onCompletedClickHandler}
            >
                COMPLETED
            </button>
        </div>
        <div>
            <button
                onClick={props.onUnCompletedClickHandler}
            >
                UNCOMPLETED
            </button>
        </div>
    </div>
)

export default Search