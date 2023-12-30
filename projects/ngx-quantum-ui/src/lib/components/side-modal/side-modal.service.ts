import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  inject,
  Injectable,
  Injector,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { NGX_QUANTUM_SIDE_MODAL_OPTIONS } from './side-modal.tokens';
import { NgxQuantumUiSideModal } from './side-modal.component';
import { NgxQuantumUiSideModalOptions } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgxQuantumUiSideModalService implements OnDestroy {
  private readonly appRef = inject(ApplicationRef);
  private readonly componentFactoryResolver = inject(ComponentFactoryResolver);
  private readonly injector = inject(Injector);
  private readonly document = inject(DOCUMENT);
  private readonly defaultOptions = inject(NGX_QUANTUM_SIDE_MODAL_OPTIONS);
  private mySubscription: Subscription = new Subscription();

  componentRef!: ComponentRef<NgxQuantumUiSideModal> | null;

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  open(options: NgxQuantumUiSideModalOptions) {
    if (this.componentRef) {
      this.close();
    } else {
      this.componentRef = this.componentFactoryResolver
        .resolveComponentFactory(NgxQuantumUiSideModal)
        .create(this.injector);

      this.componentRef.instance.options = {
        ...this.defaultOptions,
        ...options
      };

      this.mySubscription = this.componentRef.instance.closeEvent
        .subscribe(() => this.close());

      this.document.body.appendChild(this.componentRef!.location.nativeElement);
      this.componentRef.hostView.detectChanges();
    }
  }

  close(): void {
    if (this.componentRef) {
      this.componentRef.instance.close()
        .then(() => {
          if (this.componentRef) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
          }
        });
    }
  }
}
