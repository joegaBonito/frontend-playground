import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../store/reducers/app.reducer';
import * as fromAuth from '../../store/reducers/component6.reducer';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.authState = this.store.select('authReducer');
  }
}
