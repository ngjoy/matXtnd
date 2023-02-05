import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatXtndThemeColorFinderService } from './services';
import { MatXtndThemeHelperComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    MatXtndThemeHelperComponent
  ],
  exports: [
    MatXtndThemeHelperComponent
  ],
  providers: [
  ],
  entryComponents: [
    MatXtndThemeHelperComponent
  ]
})
export class MatXtnUtilsModule {
  constructor(colorFinder: MatXtndThemeColorFinderService) {
  }
}
