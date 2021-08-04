import _ from 'lodash';

export const isTouchDevice = () => {
  return !!("undefined" != typeof document.documentElement.ontouchstart);
  // return true;
}
