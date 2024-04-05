import Block from './block';

export function navigate(block: Block, query?: string) {
  const container = document.getElementById(query || '#app');
  if (container) {
    container.append(block.getContent() as string | Node);
  }
}
