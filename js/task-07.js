const fontSize = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

fontSize.addEventListener("input", () => {
    textControl.style.fontSize = `${fontSize.value}px`;
});