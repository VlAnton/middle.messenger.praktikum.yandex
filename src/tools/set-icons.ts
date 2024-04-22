import Dots from '../assets/icons/dots.svg?url';
import ProfileImg from '../assets/icons/profileImg.svg?url';
import Read from '../assets/icons/read.svg?url';
import SendFile from '../assets/icons/sendFIle.svg?url';
import SendMessage from '../assets/icons/sendMessage.svg?url';

type Icon = {
  src: string;
  class: string;
};

export const icons: Array<Icon> = [
  { src: Dots, class: 'icon-dots' },
  { src: ProfileImg, class: 'icon-profile-img' },
  { src: Read, class: 'icon-read' },
  { src: SendFile, class: 'icon-send-file' },
  { src: SendMessage, class: 'icon-send-message' },
];

export function setIcons(icons: Array<Icon>) {
  icons.forEach((icon) => {
    const imgs: HTMLCollection | null = document.getElementsByClassName(
      icon.class
    );
    if (imgs) {
      Array.from(imgs).forEach((img: Element) => {
        (img as HTMLImageElement).src = icon.src;
      });
    }
  });
}
