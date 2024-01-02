import { TemplateRef, Type } from '@angular/core';

export interface NgxQuantumUiSideModalOptions {
  /**
   * Side modal header title
   */
  title?: string;
  /**
   * Hide close button, by default true
   */
  hideCloseBtn?: boolean;
  /**
   * Modal body text
   */
  modalBodyText?: string;
  /**
   * Width of the modal
   */
  maxWidth?: string;
  /**
   * Duration of the modal animation
   */
  duration?: string;
  /**
   * Modal body template use ng-template
   */
  modalBodyTemplate?: TemplateRef<any> | null | Type<any>;
}
