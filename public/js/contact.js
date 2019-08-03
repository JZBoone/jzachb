import "../css/modal.css";

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

const TextArea = () => {
  return createElement("textarea", {
    id: "send-message",
    autofocus: true
  });
};

const modalEl = () => {
  return document.getElementById("modal");
};

const focusInput = () => {
  const input = document.getElementById("send-message");
  input.focus();
};

const CloseIcon = () => {
  const closeIcon = createElement("div", {
    className: "close-icon",
    onclick: () => {
      document.body.style.overflow = "";
      const modal = modalEl();
      modal.remove();
    }
  });
  return closeIcon;
};

const ModalContent = () => {
  return createElement("div", {
    className: "modal-content"
  });
};

const Modal = () => {
  return createElement("div", {
    id: "modal",
    className: "modal"
  });
};

export const contactModule = e => {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  render({
    el: Modal,
    children: [
      {
        el: ModalContent,
        children: [{ el: CloseIcon }, { el: TextArea }]
      }
    ]
  });
  const modal = modalEl();
  // // force opacity style to get applied before transition
  window.getComputedStyle(modal).opacity;
  modal.style.opacity = ".9";
  focusInput();
};
