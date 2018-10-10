import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {PENDING} from 'actions/types';



class TodoTasks extends Component{

  handleDoneClick = (task)=>{
    this.props.doneTask(task);
  }
  renderTasks=()=>{
    console.log('inside',this.props.tasks);
    return this.props.tasks.map((task)=>{
      return task.status==PENDING? <li className='list-group-item'>{task.name}  <button className='btn btn-danger' onClick={this.handleDoneClick.bind(null,task.name)}>Click me when done</button></li>:''
    })
  }

  render(){
    return <div>
    <h3>Todo Tasks</h3>
    <ul className='list-group'>{this.renderTasks()}</ul>
    </div>
  }
}

function mapStateToProps({tasks}){
  console.log(tasks)
  return {
    tasks
  }
}
export default connect(mapStateToProps,actions)(TodoTasks)
