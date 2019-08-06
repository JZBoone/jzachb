const getString = ({ data, width, height }) => {
  let result = "%c";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const oneLine = width * 4;
      const i = y * oneLine + x * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      const rgba = `${r}${g}${b}${a}`;
      if (rgba !== "0000") {
        result += "jzb";
      } else {
        result += "   ";
      }
    }
    result += "\n";
  }
  return result;
};

const getImageData = ({ message, height, width }) => {
  const canvas = document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  const context = canvas.getContext("2d");
  context.font = `${height - 2}px Hind Siliguri`;
  context.fillText(message, 0, height - 2);
  const { data } = context.getImageData(0, 0, width, height);
  return data;
};

export const consoleLetterPrint = message => {
  const width = 100;
  const height = 22;
  const data = getImageData({ message, height, width });
  const string = getString({ data, width, height });
  console.log(
    string,
    "color: #00b7ff; font-family: monospace; font-size: 6px;"
  );
};
