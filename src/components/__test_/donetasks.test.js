import React , {Component} from 'react';
import {mount} from 'enzyme';
import {connect} from 'react-redux';
import {COMPLETED} from 'actions/types';
import DoneTasks from 'components/DoneTasks';
import Root from 'Root';

let wrapper;

beforeEach(()=>{
  const initialState = {tasks:[{name:'New Comment1',status:COMPLETED} ,{name:'New Comment1',status:null} ,{name:'New Comment1',status:COMPLETED}]}
  wrapper = mount(<Root initialState={initialState}><DoneTasks/></Root>)
})

afterEach(()=>{

})

describe('Done Tasks Component',()=>{
  it('Done Task', ()=>{
    expect(wrapper.find('li').length).toEqual(2)
  })
})
