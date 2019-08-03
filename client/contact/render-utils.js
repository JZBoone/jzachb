export const createElement = (type, attrs = {}) => {
  const el = document.createElement(type);
  Object.entries(attrs).forEach(attr => {
    const key = attr[0];
    const val = attr[1];
    el[key] = val;
  });
  return el;
};

export const createElementNS = (type, attrs = {}) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", type);
  Object.entries(attrs).forEach(attr => {
    const key = attr[0];
    const val = attr[1];
    el.setAttribute(key, val);
  });
  return el;
};

export const render = ({ el, parent = document.body, children = [] }) => {
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
