const input = document.getElementById("myInput");

input.addEventListener("keypress", function() {
    console.log("Button Pressed");
    let key = event.key;
    let code = event.code;
    let which = event.which;
    console.log(key);
    console.log(code);
    console.log(which);
});

// function keycode() {
//     let key = event.keyCode;
//     console.log(key);
// }