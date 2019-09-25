import React, { useState } from 'react'
import Loader from 'react-loader-spinner'

export default function ListTask(props) {
    // console.log(props.tasks.length)
    const [modalOpen, setModalOpen] = useState(0);
    let [name, setName] = useState('')
     return (
          <div className='col s6'>
               <ul className="collection with-header">
                <li class="collection-header"><h4>New tasks - {props.tasks.length}</h4></li>
                    {props.tasks.length > 0 ? 
                    props.tasks.map(task => {
                        return (
                            <li className="collection-item" key={task.taskId}>
                                <div>
                                    {modalOpen % 2 !== 0 ? 
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        let formData = {
                                            taskId: task.taskId,
                                            name: name
                                        }
                                        props.handleEdit(formData)
                                        setModalOpen(modalOpen + 1)
                                    }}>
                                        <input type='text' name='name' placeholder={task.name} onChange={(e) => {
                                            // console.log(e.target.value)
                                            setName(e.target.value)
                                            // console.log(name)
                                            // props.handleEdit(e.target.value)
                                        }}/>
                                    </form>: task.name}
                                    <a href="#!" onClick={() => {
                                        // console.log(task.taskId)
                                        setModalOpen(modalOpen + 1)
                                    }} className="secondary-content"><i className="material-icons">edit</i></a>
                                    <a href="#!" onClick={() => {
                                        console.log(task.taskId)
                                        props.handleDelete(task.taskId)
                                    }} className="secondary-content"><i className="material-icons">cancel</i></a>
                                    <a href="#!" onClick={() => {
                                        // console.log(task.taskId)
                                        props.handleComplete(task.taskId)
                                    }} className="secondary-content"><i className="material-icons">check_circle</i></a>
                                </div>
                            </li>
                        )
                    }): props.loading? '': <li className='collection-item'>No Todo!!!</li> }
                </ul>
                {props.loading? 
                    <div className='center-align'>
                        <Loader
                            type="ThreeDots"
                            color="grey"
                            height={50}
                            width={50}
                        />
                    </div>
                : ""}
          </div>
     )
}
