let counterValue = 0;

const decrementButton = document.querySelector(
    `#counter button[data-action="decrement"]`
);
const incrementButton = document.querySelector(
    `#counter button[data-action="increment"]`
);
const valueSpan = document.querySelector("#value");

const increment = () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);