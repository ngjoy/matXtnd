import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export type MatXtndSuccessSnackBarType = { message: string; }

/** @dynamic */
@Component({
  selector: 'matxtnd-snackbar-success',
  templateUrl: 'snackbar-success.component.html',
  styleUrls: [`snackbar-success.component.scss`]
})
export class MatXtndSnackbarSuccessComponent {

  message: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) private readonly data: MatXtndSuccessSnackBarType) {
    this.message = data.message;
  }

} 
