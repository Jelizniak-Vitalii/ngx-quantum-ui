# NgxQuantumUi

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

Welcome to NgxQuantum, a comprehensive UI library for Angular applications. While still in its early stages, NgxQuantum currently introduces a robust feature: the NgxQuantumUiSideModalService.

### Installation

```
npm i ngx-quantum-ui-side-modal
```

### NgxQuantumUiSideModal
NgxQuantumUiSideModalService represents a service for managing side modals in an Angular application.
### Usage

```bash
constructor(private sideModalService: NgxQuantumUiSideModalService) {}

// ...

const modalContent: ModalContent = 'Hello, Quantum!'; // You can use a string, TemplateRef, or a Component type as modal content
const modalOptions: NgxQuantumUiSideModalOptions = {
  title: 'Welcome Modal',
  hideCloseBtn: false,
  maxWidth: '500',
  duration: '300'
};

this.sideModalService.open(modalContent, modalOptions)
  .subscribe(result => {
    console.log('Modal closed with result:', result);
  });

// ...

this.sideModalService.close('Modal Result'); // Closes the currently open modal with an optional result
```

### Methods
```
open(content: ModalContent, options: NgxQuantumUiSideModalOptions): Observable<any> | void
```
Opens a new side modal with the specified content and options. Returns an Observable that will emit the result when the modal is closed.

### NgxQuantumUiSideModalOptions

`title`: The title of the modal.

`hideCloseBtn`: Whether to hide the close button (default is false).

`maxWidth`: The maximum width of the modal.

`duration`: The duration of the open/close animation.
