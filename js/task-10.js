function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create');
const destroyBtn = document.querySelector('[data-destroy');
const boxesContainter = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxesHTML += box;
  }
  boxesContainter.innerHTML = boxesHTML;
}
function destroyBoxes() {
  boxesContainter.innerHTML = '';
}
