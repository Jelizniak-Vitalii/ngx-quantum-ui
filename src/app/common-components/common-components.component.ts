import { ChangeDetectionStrategy, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { NgxQuantumUiSideModalService } from '../../../projects/ngx-quantum-ui/src/lib';

@Component({
  selector: 'app-common-components',
  templateUrl: './common-components.component.html',
  styleUrls: ['./common-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonComponentsComponent  {
  @ViewChild('sideModalTemplateBody') sideModalTemplateBody!: TemplateRef<ElementRef>;

  constructor(
    private ngxQuantumUiSideModalService: NgxQuantumUiSideModalService
  ) {}

  openSideModal() {
    this.ngxQuantumUiSideModalService.open({
      title: 'Side Modal Example',
      modalBodyText:" test text",
      modalBodyTemplate: this.sideModalTemplateBody
    });
  }
}
