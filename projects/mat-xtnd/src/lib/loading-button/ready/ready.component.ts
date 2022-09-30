import { Component, Host } from '@angular/core';
import { MatXtndLoadingButtonComponent } from '../loading-button.component';

@Component({
  selector: 'matxtnd-loading-button-ready',
  templateUrl: 'ready.component.html',
  styleUrls: [`ready.component.scss`]
})
export class MatXtndReadyComponent {

  constructor(@Host() public parentContext: MatXtndLoadingButtonComponent) { }

} 
