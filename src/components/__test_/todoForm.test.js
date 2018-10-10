import React from 'react';
import {PENDING} from 'actions/types';
import {mount} from 'enzyme';
import Root from 'Root';
import TodoForm from 'components/TodoForm';

let wrapper;

beforeEach(()=>{
  const initialState = { tasks:[{name:'Go To School',PENDING}]}
  wrapper = mount(<Root intitalState={initialState}><TodoForm/></Root>);
})

afterEach(()=>{
 wrapper.unmount();
})


describe('Test Todo Form', ()=>{

  it('has a textarea to enter text', ()=>{
     expect(wrapper.find('textarea').length).toEqual(1);
  })

  it('simulate change', ()=>{
    wrapper.find('textarea').simulate('change',{target:{value:'New Task'}})
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('New Task');
  })

  it('simulate the submit click', ()=>{
    wrapper.find('textarea').simulate('change',{target:{value:'New Task'}})
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('New Task');
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  })

})
