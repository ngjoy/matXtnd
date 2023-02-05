import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatXtndConfirmationDialogActionType, MatXtndConfirmationDialogActionTypes, MatXtndConfirmationDialogButtonLabelsDefaults, MatXtndConfirmationDialogComponent, MatXtndConfirmationDialogParamsType } from '../components';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class MatXtndConfirmationDialogService {

  constructor(private readonly dialog: MatDialog) { }

  OnOkOrCancel(parms: MatXtndConfirmationDialogParamsType, config: MatDialogConfig<MatXtndConfirmationDialogComponent> = { width: '250px', disableClose: true }): Observable<MatXtndConfirmationDialogActionType> {
    const dialogInstance = this.dialog.open(MatXtndConfirmationDialogComponent, {
      ...config,
      data: { ...parms, buttonLabels: (parms.buttonLabels || MatXtndConfirmationDialogButtonLabelsDefaults)}
    })
    return dialogInstance.afterClosed().pipe(filter(x => !!x))
  }

  OnOk(parms: MatXtndConfirmationDialogParamsType, config: MatDialogConfig<MatXtndConfirmationDialogComponent> = { width: '250px', disableClose: true }): Observable<void> {
    const dialogInstance = this.dialog.open(MatXtndConfirmationDialogComponent, {
      ...config,
      data: { ...parms, buttonLabels: (parms.buttonLabels || MatXtndConfirmationDialogButtonLabelsDefaults) }
    })
    return dialogInstance.afterClosed().pipe(filter(x => x === MatXtndConfirmationDialogActionTypes.OK))
  }

}
