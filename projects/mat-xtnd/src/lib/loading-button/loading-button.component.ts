import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

type LoadingBtnResponse = any;
type ButtonTypes = "button" | "submit" | "reset";

const materialButtonAttrs = [
  'mat-button',
  'mat-raised-button',
  'mat-icon-button',
  'mat-fab',
  'mat-mini-fab'
];

@Component({
  selector: 'matxtnd-loading-button',
  templateUrl: 'loading-button.component.html',
  styleUrls: [`loading-button.component.scss`]
})
export class MatXtndLoadingButtonComponent {

  private _busy = false;
  private _disabled = false;

  @Input() color: ThemePalette = "primary";

  @Input() set busy(value: BooleanInput) {
    this._busy = coerceBooleanProperty(value);
  }
  get busy() { return this._busy; }

  @Input() set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled() { return this._disabled; }

  @Output() submit: EventEmitter<LoadingBtnResponse> = new EventEmitter<LoadingBtnResponse>();

  buttonType: ButtonTypes = "button";
  additionalCssClass: string  = "";

  constructor(element: ElementRef) {
    const nativeEl = element.nativeElement as HTMLElement;

    materialButtonAttrs.forEach((attr, index) => {
      if (nativeEl.hasAttribute(attr)) {
        this.additionalCssClass = `${attr} ${this.additionalCssClass}`
      }
    })

    if (nativeEl.hasAttribute('type')) {
      this.buttonType = nativeEl.getAttribute('type') as ButtonTypes;
    }
  }


  click($event: LoadingBtnResponse) {
    this.submit.emit($event)
  }

} 
