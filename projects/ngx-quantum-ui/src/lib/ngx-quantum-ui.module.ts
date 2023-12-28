import { NgModule } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgxQuantumUiSideModal } from './';

@NgModule({
  declarations: [NgxQuantumUiSideModal],
  imports: [TranslateModule, NgIf, NgTemplateOutlet, NgClass],
  exports: [NgxQuantumUiSideModal]
})
export class NgxQuantumUiModule {}
