import React from 'react'

class ToDo extends React.Component {
    state = {
        tasks: [],
        filterText: '',
        chosenFilter: 'ALL',
        newTaskText: ''
    }

    render() {
        return (
            <div>
                ToDo
            </div>
        )
    }
}

export default ToDo