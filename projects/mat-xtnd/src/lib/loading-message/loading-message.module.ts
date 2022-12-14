import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from "@angular/material/icon";
import { MatXtndLoadingMessageComponent } from "./loading-message.component";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MatXtndLoadingMessageComponent
  ],
  exports: [
    MatXtndLoadingMessageComponent
  ]
})
export class MatXtnLoadingMessageModule { }
