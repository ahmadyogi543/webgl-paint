import GL from "./GL.js";
import { Colors } from "./colors.js";
import { getPosition, hexToRgb } from "./utils.js";

export default class App {
  constructor(canvasId, options) {
    const { fsSource, vsSource } = options;

    this.glInstance = new GL(canvasId, fsSource, vsSource);
    this.gl = this.glInstance.gl;
    this.canvas = this.glInstance.canvas;

    this.#init();
  }

  #init() {
    this.setColor(Colors.RED);
    this.setMode("dot");
    this.setSize(10.0);
    this.canvas.addEventListener("click", (ev) => {
      this.#handleOnClickCanvas(ev);
    });
  }

  #getPosition(ev) {
    const mouseX = ev.clientX;
    const mouseY = ev.clientY;
    const rect = ev.target.getBoundingClientRect();

    return getPosition(mouseX, mouseY, rect, canvas.width, canvas.height);
  }

  #handleOnClickCanvas(ev) {
    const pos = this.#getPosition(ev);
    this.setPosition(pos);
    this.draw();
  }

  setColor(color) {
    const u_FragColor = this.gl.getUniformLocation(
      this.gl.program,
      "u_FragColor"
    );

    const normalizedColor = hexToRgb(color);
    this.gl.uniform4f(u_FragColor, ...normalizedColor);
  }

  setPosition(pos) {
    const a_Position = this.gl.getAttribLocation(this.gl.program, "a_Position");
    this.gl.vertexAttrib4f(a_Position, pos.x, pos.y, 0.0, 1.0);
  }

  setMode(mode) {
    this.mode = mode;
    document.getElementById("mode").innerHTML = this.mode;
  }

  setSize(size) {
    const a_Size = this.gl.getAttribLocation(this.gl.program, "a_Size");
    this.gl.vertexAttrib1f(a_Size, size);
  }

  clear(color = Colors.BLACK) {
    const normalizedColor = hexToRgb(color);

    this.gl.clearColor(...normalizedColor);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  draw() {
    this.clear(Colors.BLACK);
    this.gl.drawArrays(this.gl.POINTS, 0, 1);
  }

  drawLine() {
    // implement here...
  }

  drawDDALine() {
    // implement here...
  }

  drawTriangle() {
    // implement here...
  }
}
