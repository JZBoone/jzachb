import letters from "./letters";
import { consoleImgPrint } from "./console-img-print";

const getTitle = () => {
  return document.title.replace("jzachb - ", "").toLowerCase();
};

const print = output => {
  let styles = "font-size: 16px; font-family: monospace; color: #00b7ff";
  console.log(output, styles);
};

const generateMessageString = messageString => {
  let lines = [];
  for (const c of messageString) {
    let i = 0;
    while (letters[c][i]) {
      if (lines[i] === undefined) {
        lines[i] = "";
      }
      lines[i] += letters[c][i] + " ";
      i++;
    }
  }
  let result = "%c";
  lines.forEach(line => {
    result += `${line} \n`;
  });
  return result;
};

const title = getTitle();
const messageString = generateMessageString(title);

const run = () => {
  if (title === "home") {
    consoleImgPrint();
  } else {
    print(messageString);
  }
};

window.onload = setTimeout(() => {
  run();
});
