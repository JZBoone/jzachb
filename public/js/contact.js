import "../css/modal.css";
import { post } from "./fetch";

const createElementNS = (type, attrs = {}) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", type);
  Object.entries(attrs).forEach(attr => {
    const key = attr[0];
    const val = attr[1];
    el.setAttribute(key, val);
  });
  return el;
};

const createElement = (type, attrs = {}) => {
  const el = document.createElement(type);
  Object.entries(attrs).forEach(attr => {
    const key = attr[0];
    const val = attr[1];
    el[key] = val;
  });
  return el;
};

const render = ({ el, parent = document.body, children = [] }) => {
  const element = el();
  parent.appendChild(element);
  children.forEach(child => {
    render({
      el: child.el,
      children: child.children,
      parent: element
    });
  });
};

const onClose = () => {
  document.body.style.overflow = "";
  const modal = modalEl();
  modal.remove();
};

const Modal = () => {
  return createElement("div", {
    id: "modal",
    className: "modal",
    onclick: onClose
  });
};

const modalEl = () => {
  return document.getElementById("modal");
};

const ModalContent = () => {
  return createElement("div", {
    className: "modal-content",
    onclick: e => {
      e.stopPropagation();
    }
  });
};

const CloseIcon = () => {
  const button = createElement("button", {
    "aria-label": "Close Send Message Popup",
    className: "close button",
    onclick: onClose
  });
  const svg = createElementNS("svg", {
    role: "img",
    viewBox: "0 0 24 24"
  });
  const path = createElementNS("path", {
    d:
      "M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12"
  });
  svg.appendChild(path);
  button.appendChild(svg);
  return button;
};

const TextArea = () => {
  return createElement("textarea", {
    id: "textarea",
    autofocus: true
  });
};

const inputEl = () => {
  return document.getElementById("textarea");
};

const doSend = message => {
  buttonEl().disabled = true;
  post("/send-message", { message })
    .then(resp => {
      if (resp.success) {
        onClose();
      } else {
        throw new Error("Did not get success response from Node");
      }
    })
    .catch(error => {
      console.error(error);
      buttonEl().disabled = false;
    });
};

const buttonEl = () => {
  return document.getElementById("send");
};

const Button = () => {
  return createElement("button", {
    id: "send",
    className: "button primary",
    innerHTML: "Send Message",
    disabled: true,
    onclick: () => {
      const message = inputEl().value;
      doSend(message);
    }
  });
};

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
        children: [{ el: CloseIcon }, { el: TextArea }, { el: Button }]
      }
    ]
  });
  const modal = modalEl();
  // // force opacity style to get applied before transition
  window.getComputedStyle(modal).opacity;
  modal.style.opacity = "1";
  focusInput();
  startTyping();
};
