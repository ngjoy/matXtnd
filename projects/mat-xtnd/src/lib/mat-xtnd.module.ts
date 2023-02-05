import { NgModule } from '@angular/core';
import { MatXtnDialogsModule } from './dialogs';
import { MatXtnLoadingButtonModule } from './loading-button';
import { MatXtnLoadingMessageModule } from './loading-message';
import { MatXtnSnackbarSuccessModule } from './snackbar-success';
import { MatXtnUtilsModule } from './utils';

@NgModule({
  imports: [
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule,
    MatXtnDialogsModule,
    MatXtnUtilsModule,
    MatXtnSnackbarSuccessModule
  ],
  exports: [
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule,
    MatXtnDialogsModule,
    MatXtnUtilsModule,
    MatXtnSnackbarSuccessModule
  ]
})
export class MatXtndModule { }
