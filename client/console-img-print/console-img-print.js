import imgSrc from "./me.png";

const getStringAndStyles = ({ data, width, height }) => {
  let result = "";
  const styles = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const k = i * width * 4 + j * 4;
      const r = data[k];
      const g = data[k + 1];
      const b = data[k + 2];
      const a = data[k + 3];
      styles.push(
        `color: rgba(${r},${g},${b},${a /
          255}); font-size: 10px; font-family: monospace; line-height: 10px;`
      );
      result += "%c◼";
    }
    result += "\n";
  }
  return [result, styles];
};

const getImageData = () => {
  return new Promise(resolve => {
    const img = document.createElement("img");
    img.onload = function() {
      const canvas = document.createElement("canvas");
      const { width, height } = img;
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0);
      const { data } = context.getImageData(0, 0, width, height);
      return resolve({ data, width, height });
    };
    img.src = imgSrc;
  });
};

export const consoleImgPrint = async () => {
  const data = await getImageData();
  const [string, styles] = getStringAndStyles(data);
  console.log(string, ...styles);
};
