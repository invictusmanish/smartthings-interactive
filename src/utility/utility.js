export const baseImagePath = (path) => {
  return require(`../assets/images/${path}`);
};

export const hexToRgba = (hex, alpha = 1) => {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the HEX color
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 6) {
    r = parseInt(hex[0] + hex[1], 16);
    g = parseInt(hex[2] + hex[3], 16);
    b = parseInt(hex[4] + hex[5], 16);
  }

  // Return the RGBA color string
  return `rgba(${r},${g},${b},${alpha})`;
};
