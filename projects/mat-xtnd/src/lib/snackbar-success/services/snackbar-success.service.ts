import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatXtndSnackbarSuccessComponent } from '../components';

@Injectable()
export class MatXtndSnackbarSuccessService {

  constructor(private readonly snackbar: MatSnackBar) { }

  Open(message: string, config: MatSnackBarConfig = { duration: 3000, horizontalPosition: 'right', verticalPosition:'bottom'}) {
    this.snackbar.openFromComponent(MatXtndSnackbarSuccessComponent, <MatSnackBarConfig>{
      data: { message },
      panelClass: `matxtnd-snackbar-success-panel`,
      ...config
    })
  }
}
