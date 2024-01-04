import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ANIMATIONS, sideModalAnimation } from '../../animations/animations';
import { NgxQuantumUiSideModalOptions } from '../../interfaces';

@Component({
  selector: 'ngx-quantum-ui-side-modal',
  templateUrl: './side-modal.component.html',
  styleUrls: ['./side-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sideModalAnimation]
})
export class NgxQuantumUiSideModal implements OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() close = () => {};

  @Input() options!: NgxQuantumUiSideModalOptions;

  @HostBinding('class') classList = 'quantum-ui-side-modal';

  @HostBinding('style.maxWidth')
  get maxWidth() {
    return this.sanitizer.bypassSecurityTrustStyle(`${this.options.maxWidth}px` );
  }

  @HostBinding(`@${ANIMATIONS.SIDE_MODAL_IN_OUT}`)
  get sideMenuInOut() {
    return {
      value: '',
      params: {
        duration: this.options.duration,
        maxWidth: this.options.maxWidth
      },
    };
  }

  ngOnDestroy() {
    this.close();
  }
}
