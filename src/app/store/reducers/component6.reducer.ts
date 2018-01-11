import * as Component6Actions from '../actions/component6.action';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
}

export function authReducer(state = initialState, action: Component6Actions.Component6Actions) {
  switch (action.type) {
    case (Component6Actions.SIGNUP):
    case (Component6Actions.SIGNIN):
      return {
        ...state,
        authenticated: true
      }
    case (Component6Actions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (Component6Actions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
