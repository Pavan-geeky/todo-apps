import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            taskId: '',
            isCompleted: false
        }
    }

    handleChange = e => {
        const uuidv1 = require('uuid/v1');
        let taskId = uuidv1();
        this.setState({
            name: e.target.value,
            taskId,
            isCompleted: false
        })
    }

    handleSubmit = e => { 
        e.preventDefault()
        e.target.task.value = ""
        this.props.handleSubmit(this.state)
    }
    render() {
        return (
            <div className='col-12'>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">add_circle_outline</i>
                        <input id="Add task" type="text" name='task' onChange={this.handleChange}/>
                        <label htmlFor="Add task">Add a new task</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTask
