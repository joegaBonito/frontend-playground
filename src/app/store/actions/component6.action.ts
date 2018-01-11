import { Action } from '@ngrx/store';


export const TRY_SINGUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type="TRY_SINGUP";

  constructor(public payload: {number:string,password:string}){}
}

export class Signup implements Action {
  readonly type="SIGNUP";

  constructor(public payload:number){}
}

export class Signin implements Action {
  readonly type="SIGNIN";

  constructor(public payload:number){
  }
}

export class Logout implements Action {
  readonly type="LOGOUT";

  constructor(public payload:number){}
}

export class SetToken implements Action {
  readonly type="SET_TOKEN";

  constructor(public payload:string){}
}

export type Component6Actions = TrySignup | Signup | Signin | Logout | SetToken;
