import React from 'react';
import Task from './components/Task'

function App() {
  return (
    <div className="App">
      <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
          <a href='#!' className='brand-logo center'>Todo-App</a> 
        </div>   
      </nav>
      <br></br>
      <br></br>
      <Task />
    </div>
  );
}

export default App;
