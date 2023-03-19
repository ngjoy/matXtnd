import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-button',
  templateUrl: 'loading-button.component.html',
  styleUrls: [`loading-button.component.scss`],
})
export class LoadingButtonComponent {

  /**
  * Busy State (NgParam)
  */
  @Input() busy = false;

  /**
  * Material Color (NgParam)
  */
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  /**
* disabled (NgParam)
*/
  @Input() disabled: boolean = false;

  /**
* Button Text
*/
  @Input() buttonText = 'Update';

    /**
* Button Loading State Text  Text
*/
@Input() buttonLoadingText = 'Updating...';


} 
