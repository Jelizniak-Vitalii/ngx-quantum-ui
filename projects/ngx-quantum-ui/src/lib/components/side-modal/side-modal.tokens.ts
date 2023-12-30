import { InjectionToken } from '@angular/core';
import { NgxQuantumUiSideModalOptions } from '../../interfaces';

export const NGX_QUANTUM_SIDE_MODAL_DEFAULT_OPTIONS: NgxQuantumUiSideModalOptions = {
  title: '',
  hideCloseBtn: false,
  modalBodyText: '',
  maxWidth: '500px',
  duration: '300',
  modalBodyTemplate: null
};

export const NGX_QUANTUM_SIDE_MODAL_OPTIONS = new InjectionToken<Partial<NgxQuantumUiSideModalOptions>>(
  '',
  {
    factory: () => NGX_QUANTUM_SIDE_MODAL_DEFAULT_OPTIONS
  }
);
