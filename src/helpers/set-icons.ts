import ChevronRight from "../assets/icons/chevron right.svg";
import Dots from "../assets/icons/dots.svg";
import ProfileImg from "../assets/icons/profileImg.svg";
import Read from "../assets/icons/read.svg";
import SendFile from "../assets/icons/sendFIle.svg";
import SendMessage from "../assets/icons/sendMessage.svg";

type Icon = {
  src: string;
  class: string;
};

export const icons: Array<Icon> = [
  { src: ChevronRight, class: "icon-chevron-right" },
  { src: Dots, class: "icon-dots" },
  { src: ProfileImg, class: "icon-profile-img" },
  { src: Read, class: "icon-read" },
  { src: SendFile, class: "icon-send-file" },
  { src: SendMessage, class: "icon-send-message" },
];

export function setIcons(icons: Array<Icon>) {
  icons.forEach((icon: Icon) => {
    const imgs: HTMLCollection | null = document.getElementsByClassName(
      icon.class,
    );
    if (imgs) {
      Array.from(imgs).forEach((img: Element) => {
        (img as HTMLImageElement).src = icon.src;
      });
    }
  });
}
