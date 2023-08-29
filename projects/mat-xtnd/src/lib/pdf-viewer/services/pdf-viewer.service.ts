import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatXtndPdfViewerComponent, MatXtndPdfViewerParamsType } from "../components";

@Injectable()
export class MatXtndPdfViewerService {

  constructor(private readonly dialog: MatDialog) { }

  Open(config: MatXtndPdfViewerParamsType) {
    this.dialog.open(MatXtndPdfViewerComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: config
    });
  }

}
