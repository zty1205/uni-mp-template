export function isDef(val: unknown) {
  return val !== null && val !== undefined && val !== '';
}

export function isUndef(val: unknown) {
  return val === null || val === undefined || val === '';
}
