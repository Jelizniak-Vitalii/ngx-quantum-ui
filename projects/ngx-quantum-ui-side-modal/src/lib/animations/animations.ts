import { animate, style, transition, trigger } from '@angular/animations';

const TRANSITION = '{{duration}}ms ease-in-out';

export const ANIMATIONS = {
  SIDE_MODAL_IN_OUT: 'sideModalInOut'
};

export const sideModalAnimation = trigger(ANIMATIONS.SIDE_MODAL_IN_OUT, [
  transition(':enter', [
    style({
      right: '-{{maxWidth}}px'
    }),
    animate(TRANSITION)
  ], { params: { duration: 300, maxWidth: '500' } }),
  transition(':leave', [
    animate(TRANSITION, style({
      right: '-{{maxWidth}}px'
    }))
  ],{ params: { duration: 300, maxWidth: '500' } })
]);
