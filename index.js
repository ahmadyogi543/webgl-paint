import App from "./js/App.js";
import { FS_SOURCE, VS_SOURCE } from "./js/constants.js";

const app = new App("canvas", {
  fsSource: FS_SOURCE,
  vsSource: VS_SOURCE,
  width: 400,
  height: 400,
});
app.draw();

const titikBtn = document.getElementById("titik");
const garisDDABtn = document.getElementById("garis-dda");
const garisBtn = document.getElementById("garis");
const segitigaBtn = document.getElementById("segitiga");
const hapusBtn = document.getElementById("hapus");
const colorPicker = document.getElementById("color");

titikBtn.addEventListener("click", () => {
  app.setMode("dot");
});

garisDDABtn.addEventListener("click", () => {
  app.setMode("dda-line");
});

garisBtn.addEventListener("click", () => {
  app.setMode("line");
});

segitigaBtn.addEventListener("click", () => {
  app.setMode("triangle");
});

hapusBtn.addEventListener("click", () => {
  app.clear();
});

colorPicker.addEventListener("change", (event) => {
  const color = event.target.value;
  app.setColor(color);

  app.draw();
});
