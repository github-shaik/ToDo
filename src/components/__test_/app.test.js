import React from 'react';
import { shallow } from  'enzyme';
import App from 'components/App';
import TodoForm from 'components/TodoForm';
import TodoTasks from 'components/TodoTasks';
import DoneTasks from 'components/DoneTasks';

let wrapper

describe('App has all the components',()=>{

  it('should have ToDo Form',()=>{
    wrapper = shallow(<App/>);
    expect(wrapper.find(TodoTasks).length).toEqual(1);
  })

})
