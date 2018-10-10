import React from 'react';
import TodoForm from 'components/TodoForm';
import TodoTasks from 'components/TodoTasks';
import DoneTasks from 'components/DoneTasks';

export default ()=> {
  return <div className='container'>
  <h1>To Do App</h1>
  <TodoForm/>
  <TodoTasks/>
  <DoneTasks/>
  </div>
}
