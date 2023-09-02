const setValidation = document.querySelector(`#validation-input`);
const inputLenght = setValidation.getAttribute("data-length");

setValidation.addEventListener("blur", () => {
    if (setValidation.value.length != inputLenght) {
        setValidation.classList.add("invalid");
    } else {
        setValidation.classList.remove("invalid");
        setValidation.classList.add("valid");
    }
});