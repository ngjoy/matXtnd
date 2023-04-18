import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatXtndConfirmationDialogComponent } from './components';
import { MatXtndConfirmationDialogService } from './services';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule
    ],
    declarations: [
        MatXtndConfirmationDialogComponent
    ],
    exports: [
        MatXtndConfirmationDialogComponent
    ],
    providers: [
        MatXtndConfirmationDialogService
    ]
})
export class MatXtnDialogsModule {}
