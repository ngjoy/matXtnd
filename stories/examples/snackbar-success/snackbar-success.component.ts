import { Component, Input } from '@angular/core';
import { MatXtndSnackbarSuccessService } from '@matxtnd'

@Component({
  selector: 'snackbar-success',
  templateUrl: 'snackbar-success.component.html',
  styleUrls: [`snackbar-success.component.scss`]
})
export class SnackbarSuccessComponent {

  /**
  * Loading message
  */
  @Input() snackbarMessage: string = 'Action Completed';

  constructor(private readonly snackbarSuccessService: MatXtndSnackbarSuccessService) { }

  do() {
    this.snackbarSuccessService.Open(this.snackbarMessage);
  }


} 
