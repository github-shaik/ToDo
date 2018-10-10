import { saveTask } from 'actions';
import  { ADD_TASK , DONE_TASK , COMPLETED ,PENDING } from 'actions/types';

it('should have a valid type', ()=>{
  const action = saveTask('new task')
  expect(action.type).toEqual(ADD_TASK)
  expect(action.payload).toEqual({name:'new task',status:PENDING})
})
