const userInput = document.querySelector("#user-input");
const showBtn = document.querySelector("#show-btn");
const fontFamilySetter = document.querySelector("#font-family");
const colorPickerSetter = document.querySelector("#color-picker");
const btnLarge = document.querySelector("#btn-large");
const btnSmall = document.querySelector("#btn-small");
const btnBold = document.querySelector("#btn-bold");
const btnItalic = document.querySelector("#btn-italic");
const btnUnderline = document.querySelector("#btn-underline");
const output = document.querySelector("#output");

let size=1.5;
let boldCtr = 0;
let italicCtr = 0;
let underlineCtr = 0;

function fontFamily(){
    output.style.fontFamily=fontFamilySetter.value;
}

function colorPicker(){
    output.style.color=colorPickerSetter.value;
}

function increaseSize() {
    size += 0.2;
    output.style.fontSize= `${size}rem`;
}

function decreaseSize() {
    size -= 0.2;
    output.style.fontSize= `${size}rem`;
}

function setBold(){
    boldCtr++;
    if(boldCtr%2==0){
        output.style.fontWeight="normal";
    }else{
        output.style.fontWeight = "bold";
    }
}

function setItalic(){
    italicCtr++;
    if(italicCtr%2==0){
        output.style.fontStyle="normal";
    }else{
        output.style.fontStyle = "italic";
    }
}

function setUnderline(){
    underlineCtr++;
    if(underlineCtr%2==0){
        output.style.textDecoration="none";
    }else{
        output.style.textDecoration = "underline";
    }
}

function showHandler() {
    if(userInput.value==""){
        output.innerText = "Please enter some text!";
        output.style.color= "red";
        output.style.fontStyle="italic";
    }else{
        output.innerText = userInput.value;
        output.style.color= "black";
        output.style.fontStyle="normal";
    }
}

showBtn.addEventListener("click", showHandler);
fontFamilySetter.addEventListener("change", fontFamily);
colorPickerSetter.addEventListener("change", colorPicker);
btnLarge.addEventListener("click", increaseSize);
btnSmall.addEventListener("click", decreaseSize);
btnBold.addEventListener("click", setBold);
btnItalic.addEventListener("click", setItalic);
btnUnderline.addEventListener("click", setUnderline);