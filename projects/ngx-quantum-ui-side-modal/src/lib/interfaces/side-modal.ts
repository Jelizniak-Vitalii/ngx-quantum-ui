/**
 * Options for configuring NgxQuantumUiSideModal behavior and appearance.
 */
export interface NgxQuantumUiSideModalOptions {
  /**
   * Title to be displayed in the header of the side modal.
   */
  title?: string;

  /**
   * Determines whether to hide the close button. By default, it is set to false.
   */
  hideCloseBtn?: boolean;

  /**
   * Specifies the maximum width of the side modal. This can be a string (e.g., '500px') or a number.
   */
  maxWidth?: string | number;

  /**
   * Duration of the modal animation. This can be a string representing a CSS time value (e.g., '300') or a number.
   */
  duration?: string | number;
}
