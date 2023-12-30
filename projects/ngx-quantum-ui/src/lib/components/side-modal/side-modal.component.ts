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

  @Input() options!: NgxQuantumUiSideModalOptions;

  @Output() closeEvent = new EventEmitter();

  @HostBinding('class') classList = 'quantum-ui-side-modal';
  @HostBinding('style.maxWidth')
  get maxWidth() {
    return this.sanitizer.bypassSecurityTrustStyle(`${this.options.maxWidth}` );
  }

  @HostBinding(`@${ANIMATIONS.SIDE_MODAL_IN_OUT}`)
  get sideMenuInOut() {
    return {
      value: '',
      params: {
        right: '0',
        duration: this.options.duration,
        maxWidth: this.options.maxWidth
      },
    };
  }

  ngOnDestroy() {
    this.closeEvent.emit();
  }

  close(): Promise<void> {
    return new Promise(resolve => resolve());
  }
}
