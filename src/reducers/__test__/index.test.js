import reducers from 'reducers/taskReducer';
import  { ADD_TASK , DONE_TASK , COMPLETED ,PENDING } from 'actions/types';


it('returns a valid state for ADD_TASK',()=>{

  const action = {
    type:ADD_TASK,
    payload:{name:'New Task', status:PENDING}
  }
  const newState = reducers([],action)

  expect(newState).toEqual([{name:'New Task', status:PENDING}])

})

it('returns a valid state for DONE_TASK',()=>{

  const action = {
    type:DONE_TASK,
    payload:{name:'New Task', status:COMPLETED}
  }
  const newState = reducers([{name:'New Task',status:PENDING}],action)
  
  expect(newState).toEqual([{name:'New Task', status:COMPLETED}])

})
