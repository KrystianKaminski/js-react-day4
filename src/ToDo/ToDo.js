import React from "react";

class ToDo extends React.Component {
  state = {
    tasks: [],
    filterText: "",
    chosenFilter: "ALL",
    newTaskText: ""
  };

  createTask = text => ({
    taskText: text,
    isCompleted: false,
    // good enough to make unique key in that case
    key: Date.now()
  });

  addTask = () =>
    this.setState({
      tasks: this.state.tasks.concat(this.createTask(this.state.newTaskText))
    });

  deleteTask = taskKey =>
    this.setState({
      tasks: this.state.tasks.filter(task => task.key !== taskKey)
    });

  completeTask = taskKey =>
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.key === taskKey
          ? {
              ...task,
              isCompleted: true
            }
          : task
      )
    });

    onAllClickHandler = () => this.setState( {chosenFilter: 'ALL'})
    onCompletedClickHandler = () => this.setState( {chosenFilter: 'COMPLETED'})
    onUnCompletedClickHandler = () => this.setState( {chosenFilter: 'UNCOMPLETED'})

    onFilterTextChangeHandler = event => this.setState({filterText: event.target.value})
    onNewTaskTextChangeHandler = event => this.setState({newTaskText: event.target.value})

  render() {
    return <div>ToDo</div>;
  }
}

export default ToDo;
