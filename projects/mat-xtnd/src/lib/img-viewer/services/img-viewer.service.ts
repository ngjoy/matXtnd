import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatXtndImgViewerComponent, MatXtndImgViewerParamsType, MatXtnImgVieweParamsDefaults } from "../components";

@Injectable()
export class MatXtndImgViewerService {

  constructor(private readonly dialog: MatDialog) { }

  Open(config: MatXtndImgViewerParamsType) {
    this.dialog.open(MatXtndImgViewerComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: { ...MatXtnImgVieweParamsDefaults, ...config }
    });
  }

}
