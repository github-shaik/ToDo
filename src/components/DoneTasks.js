import React , {Component} from 'react';
import {connect} from 'react-redux';
import {COMPLETED} from 'actions/types';

class DoneTasks extends Component {

  loadTasks = ()=>{

    console.log('DONE',this.props.tasks)
    return this.props.tasks.map((task)=>{
      return task.status == COMPLETED ? <li className='list-group-item'>{task.name}<span class="badge badge-success">Success</span></li> : ''
    })
  }

 render(){
  return <div>
   <h3>Done Tasks</h3>
   <ul className='list-group'>{this.loadTasks()}</ul>
   </div>
 }
}

function mapStateToProps({tasks}){
  return {
    tasks
  }
}

export default connect(mapStateToProps)(DoneTasks);
