import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-message',
  templateUrl: 'loading-message.component.html',
  styleUrls: [`loading-message.component.scss`]
})
export class LoadingMessageComponent {

   /**
   * Material Color (NgParam)
   */
  @Input() color: 'primary' | 'accent' | 'warn' = "primary";
  /**
  * Diameter of the Loading Animation (NgParam)
  */
  @Input() diameter: number = 30;
  /**
  * Stroke Width of the Loading Animation (NgParam)
  */
  @Input() strokeWidth: number = 2;

  /**
  * Loading message
  */
  @Input() loadingMessage: string = 'Loading...';

} 
