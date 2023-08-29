import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatXtndImgViewerComponent } from './components';
import { MatXtndImgViewerDirective } from './directives';
import { MatXtndImgViewerService } from './services';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MatXtndImgViewerComponent,
    MatXtndImgViewerDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    MatXtndImgViewerComponent,
    MatXtndImgViewerDirective
  ],
  providers: [
    MatXtndImgViewerService
  ]
})
export class MatXtndImgViewerModule { }
