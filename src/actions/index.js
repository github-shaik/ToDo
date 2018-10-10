import  { ADD_TASK , DONE_TASK , COMPLETED ,PENDING } from './types';

export function saveTask(task){
  return{
    type:ADD_TASK,
    payload:{name:task,status:PENDING}
  }
}

export function doneTask(task){
  return {
    type:DONE_TASK,
    payload:{name:task,status:COMPLETED}
    }
}
