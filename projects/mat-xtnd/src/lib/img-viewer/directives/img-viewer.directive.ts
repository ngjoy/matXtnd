import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostListener, Input, TemplateRef } from '@angular/core';
import { MatXtndImgViewerParamsType } from '../components';
import { MatXtndImgViewerService } from '../services';

@Directive({
  selector: '[matXtndImgViewer]'
})
export class MatXtndImgViewerDirective implements MatXtndImgViewerParamsType {

  internalDisplayImgZoonInControls = true;
  internalDisplayImgName = false;

  @Input() src!: string;
  @Input() imgName?: string;
  @Input() set displayImgZoonInControls(value: BooleanInput) {
    this.internalDisplayImgZoonInControls = coerceBooleanProperty(value);
  }
  get displayImgZoonInControls() : boolean { return this.internalDisplayImgZoonInControls; }
  @Input() set displayImgName(value: BooleanInput) {
    this.internalDisplayImgName = coerceBooleanProperty(value);
  }
  get displayImgName(): boolean {return this.internalDisplayImgName }

  @HostListener('click', ['$event']) click() {
    this.service.Open({
      src: this.src,
      name: this.imgName,
      displayZoonInControls: this.displayImgZoonInControls,
      displayName: this.displayImgName
    });
  }

  constructor(private readonly service: MatXtndImgViewerService) { }
}
