let scores, roundScore, activePlayer, gamePlaying;

function display_random_image() {
    let theImages = [{
        src: 'dice1.png'
    }, {
        src: 'dice2.png',
    }, {
        src: 'dice3.png',
    }, {
        src: 'dice4.png',
    }, {
        src: 'dice5.png',
    }, {
        src: 'dice6.png',
    }];

    let diceImages = [];
    for (let i = 0, j = theImages.length; i < j; i++) {
        diceImages[i] = new Image();
        diceImages[i].src = theImages[i].src;
        diceImages[i].width = theImages[i].width;
        diceImages[i].height = theImages[i].height;
    }

    function getRandomNum(min, max) {
        img = Math.floor(Math.random() * (max - min + 1)) + min;
        return diceImages[img];
    }

    let newImage = getRandomNum(0, diceImages.length - 1);

    let images = document.getElementsByTagName('img');
    let l = images.length;
    for (let p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }

    document.body.appendChild(newImage);
}

// let score = [{
//     src: 'dice1.png' = "1"
// }, {
//     src: 'dice2.png' = "2",
// }, {
//     src: 'dice3.png' = "3",
// }, {
//     src: 'dice4.png' = "4",
// }, {
//     src: 'dice5.png' = "5",
// }, {
//     src: 'dice6.png' = "6",
// }];