import { NgModule } from '@angular/core';
import { MatXtndChipsModule } from './chips';
import { MatXtnDialogsModule } from './dialogs';
import { MatXtnLoadingButtonModule } from './loading-button';
import { MatXtnLoadingMessageModule } from './loading-message';
import { MatXtnSnackbarSuccessModule } from './snackbar-success';
import { MatXtnUtilsModule } from './utils';

@NgModule({
  imports: [
    MatXtndChipsModule,
    MatXtnDialogsModule,
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule,
    MatXtnSnackbarSuccessModule,
    MatXtnUtilsModule,
  ],
  exports: [
    MatXtndChipsModule,
    MatXtnDialogsModule,
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule,
    MatXtnSnackbarSuccessModule,
    MatXtnUtilsModule,
  ]
})
export class MatXtndModule { }
