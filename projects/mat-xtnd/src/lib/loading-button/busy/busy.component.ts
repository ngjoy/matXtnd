import { Component, Host } from '@angular/core';
import { MatXtndLoadingButtonComponent } from '../loading-button.component';

@Component({
  selector: 'matxtnd-loading-button-busy',
  templateUrl: 'busy.component.html',
  styleUrls: [`busy.component.scss`]
})
export class MatXtndBusyComponent {

  constructor(@Host() public parentContext: MatXtndLoadingButtonComponent) { }
} 
