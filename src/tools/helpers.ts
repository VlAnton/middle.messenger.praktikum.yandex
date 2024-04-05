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
