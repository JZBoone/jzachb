import imgSrc from "./me.png";

const getStringAndStyles = ({ data, width, height }) => {
  let result = "";
  const styles = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const oneLine = width * 4;
      const i = y * oneLine + x * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      styles.push(`color: rgba(${r},${g},${b},${a / 255}); font-size: 8px;`);
      result += "%c██";
    }
    result += "\n";
  }
  return [result, styles];
};

const getImageData = () => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
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
