import { Component } from '@angular/core';
import { MatXtndConfirmationDialogService } from '../../../mat-xtnd/src/lib/dialogs/services/confirmation-dialog.service';
import { MatXtndSnackbarSuccessService } from '../../../mat-xtnd/src/lib/snackbar-success';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integration';
  constructor(
    private readonly snackbarSuccessStatus: MatXtndSnackbarSuccessService,
    private readonly confirmationDialog: MatXtndConfirmationDialogService,
  ) { }

  successSnackbar() {
    this.snackbarSuccessStatus.Open('Activity Completed');
  }

  confirm() {
    this.confirmationDialog.OnOkOrCancel({ title: 'Confirm', message: 'Are you sure you want to do this?' })
      .subscribe(response => console.log(response));      ;
  }
}
