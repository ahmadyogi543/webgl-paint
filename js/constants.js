export const FS_SOURCE = `
precision mediump float;
uniform vec4 u_FragColor;

void main() {
  gl_FragColor = u_FragColor;
}`;

export const VS_SOURCE = `
attribute vec4 a_Position;
attribute float a_Size;

void main() {
  gl_Position = a_Position;
  gl_PointSize = a_Size;
}`;
