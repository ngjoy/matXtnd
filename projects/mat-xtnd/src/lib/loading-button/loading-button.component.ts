import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

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


  @Input() busy: boolean = false;
  @Input() disabled: boolean = false;

  @Output()
  private submit: EventEmitter<LoadingBtnResponse> = new EventEmitter<LoadingBtnResponse>();

  buttonType: ButtonTypes = "button";
  color: string | null = "primary"
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

    if (nativeEl.hasAttribute('color')) {
      this.color = nativeEl.getAttribute('color')
    }
  }


  click($event: LoadingBtnResponse) {
    this.submit.emit($event)
  }

} 
