import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { LandingComponent } from './components/landing/landing.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';
import { Component6Component } from './components/component6/component6.component';

const appRoutes:Routes = [
  {path:"",component:LandingComponent},
  {path:"Component1Component",component:Component1Component},
  {path:"Component2Component",component:Component2Component},
  {path:"Component3Component",component:Component3Component},
  {path:"Component4Component",component:Component4Component},
  {path:"Component5Component",component:Component5Component},
  {path:"Component6Component",component:Component6Component},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
