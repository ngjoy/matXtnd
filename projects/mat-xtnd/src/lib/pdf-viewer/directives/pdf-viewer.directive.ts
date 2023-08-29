import { Directive, HostListener, Input, TemplateRef } from '@angular/core';
import { MatXtndPdfViewerService } from '../services';

@Directive({
  selector: '[matXtndPdfViewer]'
})
export class MatXtndPdfViewerDirective {

  @Input() src!: string;
  @Input() template!: TemplateRef<any>
 
  @HostListener('click', ['$event']) click() {
    this.service.Open({ src: this.src, template: this.template });
  }

  constructor(private readonly service: MatXtndPdfViewerService) { }
}
