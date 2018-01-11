import * as Component5Actions from '../actions/component5.action';

export interface State {
  count:number;
}

const initialState:State = {
  count: 0
};

export function countReducer(state = initialState, action: Component5Actions.Component5Actions) {
 switch (action.type) {
   case Component5Actions.INCREMENT:
     return {
       ...state,
       count:state.count+action.payload
     }

   case Component5Actions.DECREMENT:
    return {
      ...state,
      count:state.count-action.payload
    }

   case Component5Actions.RESET:
   return {
     ...state,
     count:action.payload
   }

   default:
     return state;
 }
}
