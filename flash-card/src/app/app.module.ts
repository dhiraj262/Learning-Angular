import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashCardComponent } from './components/flash-card/flash-card.component';
import { Card1Component } from './components/card1/card1.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashCardComponent,
    Card1Component,
    ImageCardComponent,
    FlipCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
