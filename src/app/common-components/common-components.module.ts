import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { CommonComponentsComponent } from './common-components.component';
import { NgxQuantumUiModule } from '../../../projects/ngx-quantum-ui/src/lib/ngx-quantum-ui.module';
import { NgForOf } from '@angular/common';

@NgModule({
  declarations: [CommonComponentsComponent],
  imports: [CommonComponentsRoutingModule, TranslateModule, NgxQuantumUiModule, NgForOf],
})
export class CommonComponentsModule {}
