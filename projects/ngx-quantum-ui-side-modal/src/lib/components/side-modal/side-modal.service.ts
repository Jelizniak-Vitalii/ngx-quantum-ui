import {
  ApplicationRef,
  ComponentRef,
  inject,
  Injectable,
  Injector
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject } from 'rxjs';

import { NGX_QUANTUM_SIDE_MODAL_OPTIONS } from './side-modal.tokens';
import { NgxQuantumUiSideModal } from './side-modal.component';
import { NgxQuantumUiSideModalOptions } from '../../interfaces';
import { ModalContent } from '../../types';
import { ModalService } from '../../services';

/**
 * NgxQuantumUiSideModalService provides methods for opening and closing side modal dialogs.
 */
@Injectable({
  providedIn: 'root'
})
export class NgxQuantumUiSideModalService {
  private readonly applicationRef = inject(ApplicationRef);
  private readonly injector = inject(Injector);
  private readonly document = inject(DOCUMENT);
  private readonly defaultOptions = inject(NGX_QUANTUM_SIDE_MODAL_OPTIONS);
  private readonly modalService = inject(ModalService);

  private componentRef!: ComponentRef<NgxQuantumUiSideModal> | null;
  private modalNotifier?: Subject<any>;

  /**
   * Opens a side modal with the specified content and options.
   * @param content The content to be displayed in the side modal.
   * @param options Configuration options for the side modal.
   * @returns An Observable that emits a result when the side modal is closed. Returns void if the modal is already open.
   */
  open(content: ModalContent, options?: NgxQuantumUiSideModalOptions): Observable<any> | void {
    if (this.componentRef) {
      this.close();
    } else {
      this.componentRef = this.modalService.createComponent<NgxQuantumUiSideModal>(
        content,
        NgxQuantumUiSideModal,
        this.applicationRef,
        this.injector
      );

      this.componentRef.instance.options = {
        ...this.defaultOptions,
        ...options
      };

      this.componentRef.instance.close = this.close.bind(this);

      this.applicationRef.attachView(this.componentRef.hostView);
      this.document.body.appendChild(this.componentRef.location.nativeElement);

      this.modalNotifier = new Subject();
      return this.modalNotifier.asObservable()
    }
  }

  /**
   * Closes the currently open side modal.
   * @param result The result to be emitted by the observable when the modal is closed.
   */
  close(result?: any) {
    setTimeout(() => {
      if (this.componentRef) {
        this.applicationRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
        this.componentRef = null;
        this.modalNotifier?.next(result);
        this.modalNotifier?.complete();
      }
    });
  }
}
