import { NgModule } from "@angular/core";
import { MatXtndBusyComponent } from './busy/busy.component';
import { MatXtndReadyComponent } from './ready/ready.component';
import { MatXtndLoadingButtonComponent } from './loading-button.component';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MatXtndBusyComponent,
    MatXtndReadyComponent,
    MatXtndLoadingButtonComponent
  ],
  exports: [
    MatXtndBusyComponent,
    MatXtndReadyComponent,
    MatXtndLoadingButtonComponent
  ]
})
export class MatXtnLoadingButtonModule {}
