import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatXtnUtilsModule } from '../utils';
import { MatXtndSnackbarSuccessComponent, MatXtndSwooshAnimationComponent } from './components';
import { MatXtndSnackbarSuccessService } from './services';

@NgModule({
    imports: [
        CommonModule,
        MatSnackBarModule,
        MatXtnUtilsModule
    ],
    declarations: [
        MatXtndSwooshAnimationComponent,
        MatXtndSnackbarSuccessComponent
    ],
    exports: [
        MatXtndSwooshAnimationComponent,
        MatXtndSnackbarSuccessComponent
    ],
    providers: [
        MatXtndSnackbarSuccessService
    ]
})
export class MatXtnSnackbarSuccessModule {}
