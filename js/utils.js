export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
        1.0,
      ]
    : null;
}

export function getPosition(mouseX, mouseY, rect, canvasWidth, canvasHeight) {
  const x = (mouseX - rect.left - canvasWidth / 2) / (canvasWidth / 2);
  const y = (canvasHeight / 2 - (mouseY - rect.top)) / (canvasHeight / 2);
  return { x, y };
}
