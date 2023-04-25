import { Component, Inject, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type MatXtndConfirmationDialogActionType = "OK" | "CANCEL";
export const MatXtndConfirmationDialogActionTypes: { [key in MatXtndConfirmationDialogActionType]: MatXtndConfirmationDialogActionType } = { OK: "OK", CANCEL: "CANCEL"}
export const MatXtndConfirmationDialogButtonLabelsDefaults: { [key in MatXtndConfirmationDialogActionType]: string } = { OK: "Ok", CANCEL: "Cancel" }
export type MatXtndConfirmationDialogButtonLabelsType = { OK: string, CANCEL: string }

export type MatXtndConfirmationDialogParamsType = { title?: string, message: string, buttonLabels?: MatXtndConfirmationDialogButtonLabelsType }
export type MatXtndConfirmationDialogParamsDataType = { title?: string, message: string, buttonLabels: MatXtndConfirmationDialogButtonLabelsType }

export const MatXtndConfirmationDialogOKButtonLabelsDefaults = { OK: "Ok" }
export type MatXtndConfirmationDialogOkButtonLabelsType = { OK: string }
export type MatXtndConfirmationDialogOkParamsType = { title?: string, message: string, buttonLabels?: MatXtndConfirmationDialogOkButtonLabelsType }


/** @dynamic */
@Component({
  selector: 'matxtnd-confirmation-dialog',
  templateUrl: 'confirmation-dialog.component.html',
  styleUrls: [`confirmation-dialog.component.scss`]
})
export class MatXtndConfirmationDialogComponent {

  constructor(
    private readonly ngZone: NgZone,
    private readonly matDialogRef: MatDialogRef<MatXtndConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: MatXtndConfirmationDialogParamsDataType,
  ) { }

  ok() {
    this.ngZone.run(() => {
      this.matDialogRef.close(MatXtndConfirmationDialogActionTypes.OK);
    });
  }

  cancel() {
    this.ngZone.run(() => {
      this.matDialogRef.close(MatXtndConfirmationDialogActionTypes.CANCEL);
    });
  }

} 



