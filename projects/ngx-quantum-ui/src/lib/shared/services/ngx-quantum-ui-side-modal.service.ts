import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { NgxQuantumUiSideModal } from '../../side-modal/side-modal.component';
import { NgxQuantumUiSideModalConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NgxQuantumUiSideModalService {
  private modals: any[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(content: NgxQuantumUiSideModalConfig): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(NgxQuantumUiSideModal)
      .create(this.injector);

    componentRef.instance.config = content;

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.modals.push(componentRef);
  }

  close(): void {
    const componentRef = this.modals.pop();
    if (componentRef) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }
  }
}
