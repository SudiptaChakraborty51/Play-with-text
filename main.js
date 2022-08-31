const userInput = document.querySelector("#user-input");
const showBtn = document.querySelector("#show-btn");
const btnLarge = document.querySelector("#btn-large");
const btnSmall = document.querySelector("#btn-small");
const btnRed = document.querySelector("#btn-red");
const btnBlue = document.querySelector("#btn-blue");
const output = document.querySelector("#output");

let size=1.5;

function increaseSize() {
    size += 0.2;
    output.style.fontSize= `${size}rem`;
}

function decreaseSize() {
    size -= 0.2;
    output.style.fontSize= `${size}rem`;
}

function setColorRed() {
    output.style.color= "red";
}

function setColorBlue(){
    output.style.color= "blue";
}

function showHandler() {
    output.innerText = userInput.value;
}

showBtn.addEventListener("click", showHandler);
btnLarge.addEventListener("click", increaseSize);
btnSmall.addEventListener("click", decreaseSize);
btnRed.addEventListener("click", setColorRed);
btnBlue.addEventListener("click", setColorBlue);