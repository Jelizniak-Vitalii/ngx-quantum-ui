import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { CommonComponentsComponent } from './common-components.component';
import { NgForOf } from '@angular/common';
import {
  NgxQuantumUiSideModalModule
} from '../../../projects/ngx-quantum-ui-side-modal/src/lib/ngx-quantum-ui-side-modal.module';

@NgModule({
  declarations: [CommonComponentsComponent],
  imports: [CommonComponentsRoutingModule, TranslateModule, NgForOf, NgxQuantumUiSideModalModule],
})
export class CommonComponentsModule {}
