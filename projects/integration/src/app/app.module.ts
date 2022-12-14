import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatXtndModule } from '../../../mat-xtnd/src/lib/mat-xtnd.module';

import { AppComponent } from './app.component';

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
