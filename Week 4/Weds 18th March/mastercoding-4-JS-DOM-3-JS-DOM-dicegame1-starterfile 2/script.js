// button.addEventListener("click", () => {
//     image.src = input.value;
// })

// function display_random_image() {
// let theImages = ['./img./dice1.png', './img./dice2.png', './img./dice3.png', './img./dice4.png', './img./dice5.png', './img./dice6.png'];

function display_random_image() {
    let theImages = [{
        src: './img./dice1.png',
        width: "250",
        height: "250"
    }, {
        src: './img./dice2.png',
        width: "250",
        height: "250"
    }, {
        src: './img./dice3.png',
        width: "250",
        height: "250"
    }, {
        src: './img./dice4.png',
        width: "250",
        height: "250"
    }, {
        src: './img./dice5.png',
        width: "250",
        height: "250"
    }, {
        src: './img./dice6.png',
        width: "250",
        height: "250"
    }];

    let preBuffer = [];
    for (let i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    function getRandomNum(min, max) {
        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    let newImage = getRandomNum(0, preBuffer.length - 1);

    let images = document.getElementsByTagName('img');
    let l = images.length;
    for (let p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }

    document.body.appendChild(newImage);
}


// while (images.length !== 0) {
//     let index = Math.floor(Math.random() * images.length);
//     $('<img src="images/large/' + images.splice(index, 1) + '">').appendTo('#images');
// }