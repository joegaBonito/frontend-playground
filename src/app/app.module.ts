import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

//Used in Component2
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { LandingComponent } from './components/landing/landing.component';

const appRoutes:Routes = [
  {path:"",component:LandingComponent},
  {path:"Component1Component",component:Component1Component},
  {path:"Component2Component",component:Component2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FilterPipeModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
