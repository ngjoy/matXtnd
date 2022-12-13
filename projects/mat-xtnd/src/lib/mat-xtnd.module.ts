import { NgModule } from '@angular/core';
import { MatXtnLoadingButtonModule } from './loading-button';
import { MatXtnLoadingMessageModule } from './loading-message';

@NgModule({
  imports: [
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule
  ],
  exports: [
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule
  ]
})
export class MatXtndModule { }
