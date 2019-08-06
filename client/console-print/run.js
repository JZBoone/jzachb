import { consoleImgPrint } from "./console-img-print";
import { consoleLetterPrint } from "./console-letter-print";

window.onload = setTimeout(() => {
  const title = document.title.replace("jzachb - ", "");
  if (title === "home") {
    consoleImgPrint();
  } else {
    consoleLetterPrint(title);
  }
});
