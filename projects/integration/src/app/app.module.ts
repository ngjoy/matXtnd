import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatXtndModule } from 'mat-xtnd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatXtndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
