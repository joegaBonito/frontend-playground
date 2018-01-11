import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as ListActions from '../../store/actions/component5.action';
import * as fromApp from '../../store/reducers/app.reducer';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {
  count$:Observable<{count:number}>;
  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit(){
    this.count$ = this.store.select('countList');
  }

  increment(){
    this.store.dispatch(new ListActions.Increment(1));
  }

  decrement(){
    this.store.dispatch(new ListActions.Decrement(1));
  }

  reset(){
    this.store.dispatch(new ListActions.Reset(0));
  }
}
