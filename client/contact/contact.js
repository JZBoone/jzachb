import "./contact.css";
import { render } from "./render-utils";
import {
  Modal,
  modalEl,
  ModalContent,
  CloseIcon,
  Label,
  TextArea,
  inputEl,
  buttonEl,
  Button
} from "./elements";

const focusInput = () => {
  const input = inputEl();
  input.focus();
};

const startTyping = () => {
  const input = inputEl();
  const message = "Hi Zach, ";
  let i = 0;
  const type = () => {
    if (i === message.length) {
      buttonEl().disabled = false;
      return;
    }
    input.value += message.charAt(i);
    i++;
    setTimeout(type, 100);
  };
  setTimeout(type, 50);
};

export const contactModule = e => {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  render({
    el: Modal,
    children: [
      {
        el: ModalContent,
        children: [
          { el: CloseIcon },
          { el: Label },
          { el: TextArea },
          { el: Button }
        ]
      }
    ]
  });
  const modal = modalEl();
  // force opacity style to get applied before transition
  window.getComputedStyle(modal).opacity;
  modal.style.opacity = "1";
  focusInput();
  startTyping();
};
