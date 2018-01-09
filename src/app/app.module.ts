import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './store/reducers/countReducer';

//Used in Component2
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgUploaderModule } from 'ngx-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { LandingComponent } from './components/landing/landing.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    LandingComponent,
    Component3Component,
    Component4Component,
    Component5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilterPipeModule,
    OrderModule,
    NgxPaginationModule,
    NgxGalleryModule,
    NgUploaderModule,
    StoreModule.forRoot({count:countReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
