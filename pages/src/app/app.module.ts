import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveLoginComponent } from './components/login/reactive-login/reactive-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './matrial/matrial.module';
import { SlidingFormComponent } from './components/sliding-form/sliding-form.component';
import { CssGridComponent } from './components/css-grid/css-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveLoginComponent,
    SlidingFormComponent,
    CssGridComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
