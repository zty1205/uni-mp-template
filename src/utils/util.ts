// 业务无关的 纯js方法

export function isDef(val: unknown): boolean {
  return val !== null && val !== undefined && val !== '';
}

export function isUndef(val: unknown): boolean {
  return val === null || val === undefined || val === '';
}

export function debounce(fn: Function, wait: number = 300, immediate: boolean = false): Function {
  let timer: any = null;
  return function() {
    const args = arguments;
    const context: any = this;

    if (immediate && !timer) {
      fn.apply(context, args);
    }

    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      timer = null; // 此时若不置空timer, 此写法立即执行只触发一次, 后面再也不会触发了
      if (!immediate) fn.apply(context, args); // 判断不是immediate的时候再调用.
    }, wait);
  };
}

export function throttle(fn: Function, wait: number = 300, immediate: boolean = false): Function {
  let timer: any = null;
  let callNow = immediate;

  return function() {
    const context = this;
    const args = arguments;

    if (callNow) {
      fn.apply(context, args);
      callNow = false;
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}

export function guid(): string {
  function S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}

export function deepCopy(obj: any, hash = new WeakMap()): any {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== 'object') return obj;

  if (hash.has(obj)) return hash.get(obj); // 循环引用

  const instance = new obj.constructor();
  hash.set(obj, instance);

  for (const key in obj) {
    // no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      instance[key] = deepCopy(obj[key], hash);
    }
  }
  return instance;
}

export function simpleCopy(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

export function isPromise(obj: Promise<unknown>) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
