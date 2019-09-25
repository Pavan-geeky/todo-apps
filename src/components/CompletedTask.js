import React from 'react'
import Loader from 'react-loader-spinner'

export default function CompletedTask(props) {
     return (
          <div className='col s6'>
               <ul class="collection with-header">
                    <li class="collection-header"><h4>Completed tasks - {props.tasks.length}</h4></li>
                    {props.tasks.length > 0 ?
                    props.tasks.map(task => {
                         return(
                              <li class="collection-item" key={task.taskId}>
                                   <div>{task.name}
                                        <a href="#!" onClick={() => {
                                             console.log(task.taskId)
                                             props.handleDelete(task.taskId)
                                        }} className="secondary-content"><i className="material-icons">cancel</i></a>
                                   </div>
                              </li>
                         )
                    }): props.loading? '': <li className='collection-item'>No Todo!!!</li>}
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
