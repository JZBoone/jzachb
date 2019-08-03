import { createElement, createElementNS } from "./render-utils";
import sendMessage from "./sendMessage";

export const Modal = () => {
  return createElement("div", {
    id: "modal",
    className: "modal",
    onclick: onClose
  });
};

export const modalEl = () => {
  return document.getElementById("modal");
};

export const onClose = () => {
  document.body.style.overflow = "";
  const modal = modalEl();
  modal.remove();
};

export const ModalContent = () => {
  return createElement("div", {
    className: "modal-content",
    onclick: e => {
      e.stopPropagation();
    }
  });
};

export const CloseIcon = () => {
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

export const TextArea = () => {
  return createElement("textarea", {
    id: "textarea",
    autofocus: true
  });
};

export const inputEl = () => {
  return document.getElementById("textarea");
};

export const buttonEl = () => {
  return document.getElementById("send");
};

export const Button = () => {
  return createElement("button", {
    id: "send",
    className: "button primary",
    innerHTML: "Send Message",
    disabled: true,
    onclick: () => {
      const message = inputEl().value;
      sendMessage(message);
    }
  });
};
