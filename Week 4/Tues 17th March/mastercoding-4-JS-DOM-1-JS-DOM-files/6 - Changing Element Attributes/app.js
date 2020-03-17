const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

console.log(image);

button.addEventListener("click", ()=>{
    image.src = input.value;
    })