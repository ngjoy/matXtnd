import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatXtndThemeHelperComponent } from '../components/theme-helper/theme-helper.component';

export type MatXtndMaterialColorType = "primary" | "accent" | "warn";
export type MatXtndMaterialColorValueType = { [key in MatXtndMaterialColorType]: string }

@Injectable({
  providedIn: 'root'
})
export class MatXtndThemeColorFinderService {

  colors: MatXtndMaterialColorValueType = { primary: '', accent: '', warn: '' };

  constructor(
    private readonly overlay: Overlay,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.initOverlay();
  }

  initOverlay() {
    const overlayref = this.overlay.create();
    const fpp = new ComponentPortal(MatXtndThemeHelperComponent);
    overlayref.attach(fpp);
    this.fetchColors();
  }

  fetchColors() {
    const comp = this.document.querySelector('matxtnd-theme-helper');
    const primary = comp?.querySelector('[color="primary"]');
    const accent = comp?.querySelector('[color="accent"]');
    const warn = comp?.querySelector('[color="warn"]');

    if (primary && accent && warn) {
      this.colors = {
        primary: getComputedStyle(primary).color,
        accent: getComputedStyle(accent).color,
        warn: getComputedStyle(warn).color
      }
      /*console.log(this.colors);*/
    }
    
    /*console.log(primary, accent, warn);*/
  }


}
