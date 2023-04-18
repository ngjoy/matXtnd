import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatXtndThemeHelperComponent } from './components';
import { MatXtndCssInjectorService, MatXtndScriptInjectorService, MatXtndThemeColorFinderService } from './services';

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
        MatXtndThemeColorFinderService,
        MatXtndCssInjectorService,
        MatXtndScriptInjectorService
    ]
})
export class MatXtnUtilsModule {
  constructor(colorFinder: MatXtndThemeColorFinderService) {
  }
}
