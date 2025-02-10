let img = document.getElementById("zoom-img");
let scale = 1;

document.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    scale += 0.1; // Zoom in
  } else {
    scale -= 0.1; // Zoom out
  }
  scale = Math.max(1, Math.min(scale, 2)); // Limit zoom range
  img.style.transform = `scale(${scale})`;
});