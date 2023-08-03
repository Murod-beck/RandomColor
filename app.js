const cols = document.querySelectorAll(".col");
const lock = document.querySelectorAll(".lock");

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.code.toLowerCase() === "space") {
    setRandomColors();
  }
});

lock.forEach((loc) => {
  const icon = loc.querySelector("i");
  loc.addEventListener("click", () => {
    icon.textContent === "lock"
      ? (icon.textContent = "lock_open")
      : (icon.textContent = "lock");
  });
});

function gereneteRandomColor() {
  let color = "";
  const hexCodes = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

function setRandomColors() {
  cols.forEach((col) => {
    const isLock = col.querySelector("i").textContent === "lock";
    const text = col.querySelector("h2");
    const lock = col.querySelector(".lock");
    const colors = gereneteRandomColor();

    if (isLock) {
      return;
    }

    text.textContent = colors;
    col.style.background = colors;

    setTextColor(text);
    setTextColor(lock);
  });
}

function setTextColor(text) {
  const colors = gereneteRandomColor();
  text.style.color = colors < "#" + 5 ? "black" : "white";
}
setRandomColors();
