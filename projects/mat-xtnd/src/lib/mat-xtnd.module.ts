import { NgModule } from '@angular/core';
import { MatXtndChipsModule } from './chips';
import { MatXtndImgViewerModule  } from './img-viewer'
import { MatXtnDialogsModule } from './dialogs';
import { MatXtnLoadingButtonModule } from './loading-button';
import { MatXtnLoadingMessageModule } from './loading-message';
import { MatXtndPdfViewerModule } from './pdf-viewer';
import { MatXtnSnackbarSuccessModule } from './snackbar-success';
import { MatXtnUtilsModule } from './utils';

@NgModule({
  imports: [
    MatXtndChipsModule,
    MatXtndImgViewerModule,
    MatXtnDialogsModule,
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule,
    MatXtndPdfViewerModule,
    MatXtnSnackbarSuccessModule,
    MatXtnUtilsModule,
  ],
  exports: [
    MatXtndChipsModule,
    MatXtndImgViewerModule,
    MatXtnDialogsModule,
    MatXtnLoadingButtonModule,
    MatXtnLoadingMessageModule,
    MatXtndPdfViewerModule,
    MatXtnSnackbarSuccessModule,
    MatXtnUtilsModule,
  ]
})
export class MatXtndModule { }
