import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export const MatXtnImgVieweParamsDefaults = { displayZoonInControls: true, displayName: false}
export type MatXtndImgViewerParamsType = { src: string, name?: string, displayZoonInControls?: boolean, displayName?: boolean  };

@Component({
  selector: 'matxtnd-img-viewer',
  templateUrl: 'img-viewer.component.html',
  styleUrls: [`img-viewer.component.scss`]
})
export class MatXtndImgViewerComponent implements OnInit {

  zoom = 1;
  loading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: MatXtndImgViewerParamsType,
    private readonly matDialogRef: MatDialogRef<MatXtndImgViewerComponent>,
  ) { }

  ngOnInit() {
    let img = new Image();
    img.src = this.data.src;
    img.onload = () => this.loading = false;
  }

  get fileName() {
    return this.data.name ?? this.fileNameInSrc
  }

  get fileNameInSrc() {
    return this.data.src.split('/')[this.data.src.split('/').length - 1];
  }

  applyZoom(val : number) {
    const result = this.zoom + val;
    if (result > 0 && result < 3) this.zoom = result;
  }

  close() {
    this.matDialogRef.close();
  }

} 
