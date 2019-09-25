import React, { Component } from 'react'
import AddTask from './AddTask'
import { connect } from 'react-redux';
import { createTask, loading, getData, removeTask, editTask, editComplete } from '../actions/todo'
import ListTask from './ListTask'
import CompletedTask from './CompletedTask';

export class Task extends Component {

    componentDidMount() {
        this.props.dispatch(getData())
        this.props.dispatch(loading(true))
    }

    handleSubmit = formData => {
        this.props.dispatch(createTask(formData))
        // console.log('Data - ',formData)
        this.props.dispatch(loading(true))
    }

    handleDelete = id => {
        // console.log(id)
        this.props.dispatch(removeTask(id))
    }

    handleEdit = e => {
        console.log(e)
        this.props.dispatch(editTask(e))
    }

    handleComplete = e => {
        // console.log(e)
        this.props.dispatch(editComplete(e))
    }

    render() {
        // console.log(this.props.tasks.length)
        const newTasks = this.props.tasks.filter(task => {
            return task.isCompleted === false
        });
        const completedTask = this.props.tasks.filter(task => {
            return task.isCompleted === true
        })

        return (
            <div className='container'>
                {/* <h5>Listing tasks - {this.props.tasks.length}</h5> */}
                    <div className='row'>
                        <ListTask tasks={newTasks} loading={this.props.loading} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleComplete={this.handleComplete}/>
                        <CompletedTask tasks={completedTask} handleDelete={this.handleDelete} loading={this.props.loading}/>
                    </div>                
                
                <AddTask handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.todo.tasks,
      loading: state.todo.loading
    }
}
  
export default connect(mapStateToProps)(Task)
