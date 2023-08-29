import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatXtndPdfViewerDirective } from './directives';
import { MatXtndPdfViewerComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatXtndPdfViewerService } from './services';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MatXtndPdfViewerComponent,
    MatXtndPdfViewerDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatXtndPdfViewerComponent,
    MatXtndPdfViewerDirective
  ],
  providers: [
    MatXtndPdfViewerService
  ]
})
export class MatXtndPdfViewerModule { }
