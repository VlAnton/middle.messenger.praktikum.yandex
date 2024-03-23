import { pages } from "../pages";

export function navigate(page: string) {
  const container = document.getElementById('app')!;
  if (container) {
    container.append(pages[page].getContent()!);
  }
}
