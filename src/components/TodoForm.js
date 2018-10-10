import React,{Component} from 'react';
import {PENDING} from 'actions/types';
import * as actions from 'actions';
import {connect} from 'react-redux';


class TodoForm extends Component{
  state = { name:'',status:null}

  handleOnChange = (e)=>{
    this.setState({name:e.target.value,status:PENDING})
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if(!this.state.name){
      alert('ENTER SOMETASKS')
    }else{
      this.props.saveTask(this.state.name)
      this.setState({name:''})      
    }


  }

  render(){
    return <div>
    <h3>Add your task here</h3>
    <form onSubmit={this.handleOnSubmit}>
    <textarea onChange={this.handleOnChange} className='container' value={this.state.name}></textarea>
    <button className='btn btn-primary'>Add</button>
    </form>
    </div>
  }
}

export default connect (null,actions)(TodoForm)
