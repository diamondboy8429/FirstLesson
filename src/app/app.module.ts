import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMyComponent } from './word/app.mycomponent';
import { BookComponent } from './book/book.component';
@NgModule({
  declarations: [
    AppComponent, AppMyComponent, BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
