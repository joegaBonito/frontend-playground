import {Injectable} from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from '../actions/component6.action';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SINGUP);

  constructor(private actions$:Actions) {

  }
}
