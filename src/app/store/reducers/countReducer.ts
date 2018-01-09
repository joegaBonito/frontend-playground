import * as ListActions from '../actions/countActions';

export interface AppState {
  count:State
}

export interface State {
  count:number;
}

const initialState:State = {
  count: 0
};

export function countReducer(state = initialState, action: ListActions.ListActions) {
 switch (action.type) {
   case ListActions.INCREMENT:
     return {
       ...state,
       count:state.count+action.payload
     }

   case ListActions.DECREMENT:
    return {
      ...state,
      count:state.count-action.payload
    }

   case ListActions.RESET:
   return {
     ...state,
     count:action.payload
   }

   default:
     return state;
 }
}
