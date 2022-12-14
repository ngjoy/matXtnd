import { Component, Input, } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'matxtnd-loading-message',
  templateUrl: 'loading-message.component.html',
  styleUrls: [`loading-message.component.scss`]
})
export class MatXtndLoadingMessageComponent {

  @Input() color: ThemePalette = "primary";
  @Input() diameter: number = 30;
  @Input() strokeWidth: number = 2;

} 
