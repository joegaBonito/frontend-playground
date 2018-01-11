import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export class Increment implements Action {
  readonly type="INCREMENT";

  constructor(public payload:number){}
}

export class Decrement implements Action {
  readonly type="DECREMENT";

  constructor(public payload:number){
    console.log(payload);
  }
}

export class Reset implements Action {
  readonly type="RESET";

  constructor(public payload:number){}
}

export type Component5Actions = Increment | Decrement | Reset;
