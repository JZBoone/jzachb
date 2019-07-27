import letters from "./letters";

const getTitle = () => {
  return document.title.replace("jzachb - ", "").toLowerCase();
};

const print = output => {
  let styles = "font-size:16px; font-family:monospace; color:#00b7ff";
  console.log(output, styles);
};

const generateMessageString = messageString => {
  let lines = [];
  for (const c of messageString) {
    for (let i = 0; i < 9; i++) {
      if (lines[i] === undefined) {
        lines[i] = "";
      }
      lines[i] += letters[c][i] + " ";
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

window.onload = print(messageString);
