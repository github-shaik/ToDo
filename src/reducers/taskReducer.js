import  { ADD_TASK , DONE_TASK , COMPLETED ,PENDING } from 'actions/types';

export default (state=[],action) => {
  switch(action.type){

    case ADD_TASK:
     return [...state,action.payload]

    case DONE_TASK:
     return state.map((task)=>{
       if(task.name == action.payload.name){
         return action.payload;
       }else{
         return task;
       }
     })

    default:
         return state;
  }

}
