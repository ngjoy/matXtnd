import { Component } from '@angular/core';
import { MatXtndSnackbarSuccessService } from '../../../mat-xtnd/src/lib/snackbar-success';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integration';
  constructor(private readonly snackbarSuccessStatus: MatXtndSnackbarSuccessService) { }

  successSnackbar() {
    this.snackbarSuccessStatus.Open('Activity Completed');
  }
}
