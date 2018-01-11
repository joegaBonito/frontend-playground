import {ActionReducerMap} from '@ngrx/store';

import * as countReducer from './component5.reducer';
import * as authReducer from './component6.reducer';

export interface AppState {
  countList:countReducer.State,
  authReducer:authReducer.State,
}

export const reducers:ActionReducerMap<AppState> = {
  countList:countReducer.countReducer,
  authReducer:authReducer.authReducer
}
