import { ModalContent } from '../types';
import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  TemplateRef,
  Type,
  ViewRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class ContentRef {
  constructor(
    public nodes: Node[][],
    public viewRef?: ViewRef,
    public componentRef?: ComponentRef<any>,
  ) {}
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly document = inject(DOCUMENT);

  createComponent<T>(
    content: ModalContent,
    component: Type<any>,
    applicationRef: ApplicationRef,
    injector: Injector
  ): ComponentRef<T> {
    const contentRef = this.getContentRef(content, applicationRef, injector);

    return createComponent(
      component,
      {
        environmentInjector: this.environmentInjector,
        projectableNodes: contentRef.nodes,
        elementInjector: injector
      }
    );
  }

  getContentRef(
    content: ModalContent,
    applicationRef: ApplicationRef,
    injector: Injector
  ): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this.createTemplateRefContent(content, applicationRef);
    } else if (typeof content === 'string') {
      return this.createStringContent(content);
    } else {
      return this.createComponentContent(content, applicationRef, injector);
    }
  }

  createTemplateRefContent(content: TemplateRef<any>, applicationRef: ApplicationRef) {
    const contentRef = content.createEmbeddedView(null);
    applicationRef.attachView(contentRef);
    return new ContentRef([contentRef.rootNodes], contentRef);
  }

  createStringContent(content: string): ContentRef {
    const component = this.document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }

  createComponentContent(content: Type<any>, applicationRef: ApplicationRef, elementInjector: Injector) {
    const componentRef = createComponent(
      content,
      {
        environmentInjector: this.environmentInjector,
        elementInjector
      }
    );

    applicationRef.attachView(componentRef.hostView);

    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
  }
}
