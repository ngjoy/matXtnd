import { Component, Input } from '@angular/core';
import { MatXtndConfirmationDialogService } from '@matxtnd'
import { tap } from 'rxjs/operators';

type ServiceMode = "Notify" | "Confirm";
export const DIALOG_SERVICE_MODE_TYPES: { [key in ServiceMode]: ServiceMode } = { Notify: "Notify", Confirm: "Confirm" };


@Component({
  selector: 'dialogs',
  templateUrl: 'dialogs.component.html',
  styleUrls: [`dialogs.component.scss`]
})
export class DialogsComponent {

  /**
* Ok message
*/
  @Input() mode: 'Notify' | 'Confirm' = 'Notify';

  /**
 * Ok message
 */
  @Input() title: string = 'Heading';

  /**
   * Ok message
   */
  @Input() message: string = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
  `;

  DIALOG_SERVICE_MODE_TYPES = DIALOG_SERVICE_MODE_TYPES;

  constructor(private readonly confirmationDialog: MatXtndConfirmationDialogService) { }


  onNotify() {
    this.confirmationDialog.OnOk({ title: this.title, message: this.message });
  }

  onConfirm() {
    const confirm$ = this.confirmationDialog.OnOkOrCancel({ title: this.title, message: this.message })
      .pipe(
        tap(response => {
          this.confirmationDialog.OnOk({ title: 'Dialog Selection', message: `The Message Selection was "${response}"` });
        })
    );
    confirm$.subscribe();
  }

  
} 
