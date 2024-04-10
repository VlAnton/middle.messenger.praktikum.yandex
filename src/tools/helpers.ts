import Block from './block';

export function navigate(block: Block, query?: string) {
  const container = document.getElementById(query || 'app');
  if (container) {
    container.append(block.getContent() as string | Node);
  }
}

type Indexed<T = unknown> = {
  [key in string]: T;
};

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if ((object as Indexed).constructor !== Object) {
    return object;
  }
  if (!(typeof path === 'string')) {
    throw new Error('path must be string');
  }
  const pathArray = path.split('.');
  if (pathArray.length === 1) {
    (object as Indexed)[pathArray[0]] = value
    return object
  }
  (object as Indexed)[pathArray[0]] = {}
  set(((object as Indexed)[pathArray[0]] as Indexed), pathArray.slice(1).join('.'), value)
  return object
}

type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
      && value !== null
      && value.constructor === Object
      && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
      return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
      const rightValue = rhs[key];
      if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
          if (isEqual(value, rightValue)) {
              continue;
          }
          return false;
      }

      if (value !== rightValue) {
          return false;
      }
  }

  return true;
}
