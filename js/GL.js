export default class GL {
  constructor(canvasId, fsSource, vsSource) {
    this.canvas = document.getElementById(canvasId);
    this.gl = this.canvas.getContext("webgl");

    this.#init(fsSource, vsSource);
  }

  #loadShader(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      this.gl.deleteShader(shader);
      throw new Error("Failed to compile shader from source!");
    }

    return shader;
  }

  #init(fsSource, vsSource) {
    const fragmentShader = this.#loadShader(this.gl.FRAGMENT_SHADER, fsSource);
    const vertexShader = this.#loadShader(this.gl.VERTEX_SHADER, vsSource);
    const shaderProgram = this.gl.createProgram();

    this.gl.attachShader(shaderProgram, vertexShader);
    this.gl.attachShader(shaderProgram, fragmentShader);
    this.gl.linkProgram(shaderProgram);

    if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
      throw new Error("Failed to initialized shader program!");
    }

    this.gl.program = shaderProgram;
    this.gl.useProgram(this.gl.program);
  }
}
