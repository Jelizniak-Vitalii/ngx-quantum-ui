import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { NgxQuantumUiSideModalConfig } from '../shared';

@Component({
  selector: 'ngx-quantum-ui-side-modal',
  templateUrl: './side-modal.component.html',
  styleUrls: ['./side-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxQuantumUiSideModal implements OnDestroy {
  @Input() title: string = '';
  @Input() openBtnText: string = 'Open Side Modal';
  @Input() openBtnClass: string = '';
  @Input() set config(config: NgxQuantumUiSideModalConfig) {
    this._config = this.config;

    if (config.initialOpenSideModal) {
      this.openSideModal();
    }
  }
  @Input() set initialOpenSideModal(value: boolean) {
    if (value) {
      this.isOpenSideModal = true;
    }
  }
  @Input() set close(value: boolean) {
    if (value) {
      this.closeSideModal();
    }
  }

  @HostBinding('class') classList = 'quantum-ui-side-modal';

  _config: NgxQuantumUiSideModalConfig = {};

  get config(): NgxQuantumUiSideModalConfig {
    return this._config;
  }

  isOpenSideModal: boolean = false;

  ngOnDestroy() {
    this.closeSideModal();
  }

  openSideModal() {
    this.isOpenSideModal = !this.isOpenSideModal;
  }

  closeSideModal() {
    this.isOpenSideModal = false;
  }
}
