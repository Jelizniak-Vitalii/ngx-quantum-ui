import { TemplateRef } from '@angular/core';

export interface NgxQuantumUiSideModalConfig {
  title?: string;
  closeBtnText?: string;
  hideCloseBtn?: boolean;
  modalBodyText?: string;
  initialOpenSideModal?: boolean;
  modalBodyTemplate?: TemplateRef<{}> | null;
}
