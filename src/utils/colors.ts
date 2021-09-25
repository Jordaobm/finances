export function hexToRgb(hex: any, opacity: string) {
  let color = hex;

  if (hex?.indexOf("rgba") !== -1) {
    color = rgbaToHex(hex);
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16
    )}, ${parseInt(result[3], 16)}, ${opacity}  )`;
  } else {
    return `rgba(255, 255, 255)`;
  }
}

const rgbaToHex = (color: string): string => {
  if (/^rgb/.test(color)) {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");

    // rgb to hex
    // eslint-disable-next-line no-bitwise
    let hex = `#${(
      (1 << 24) +
      (parseInt(rgba[0], 10) << 16) +
      (parseInt(rgba[1], 10) << 8) +
      parseInt(rgba[2], 10)
    )
      .toString(16)
      .slice(1)}`;

    // added alpha param if exists
    if (rgba[4]) {
      const alpha = Math.round(0o1 * 255);
      const hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
      hex += hexAlpha;
    }

    return hex;
  }
  return color;
};
