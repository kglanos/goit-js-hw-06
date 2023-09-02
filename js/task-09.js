function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const backgroundColor = document.querySelector(".color")
const colorButton = document.querySelector(".change-color");

colorButton.addEventListener("click", () => {
  let currentColor = getRandomHexColor();

  bodyColor.style.backgroundColor = `${currentColor}`;
  backgroundColor.textContent = `${currentColor}`;
});