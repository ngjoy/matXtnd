import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-button',
  templateUrl: 'loading-button.component.html',
  styleUrls: [`loading-button.component.scss`],
})
export class LoadingButtonComponent {

  /**
  * Busy State
  */
  @Input() busy = false;

} 
