console.log("Running");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//TODO - Grabs an element by its ID name.

const title = document.getElementById("greeting");

//TODO - Adds an event listener. When the heading is clicked on, the console will log that the heading has been clicked.
title.addEventListener("click", function () {
    console.log("Heading clicked");

    // The below changes the background colour of the heading once clicked.
    // title.style.backgroundColor = "yellow";

    if (title.style.backgroundColor == "yellow") {
        title.style.backgroundColor = "blue";
        title.style.color = "white";
    } else {
        title.style.backgroundColor = "yellow";
        title.style.color = "black";
    }
    console.log(title.style.backgroundColor);
});

//* .style allows CSS application.
// document.getElementById("greeting").style.color = "purple";
// document.getElementById("greeting").style.backgroundColor = "orange";

//* Below is a shorter version of the above.
title.style.color = "purple";
title.style.backgroundColor = "orange";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//TODO - Grabs elements by their Class name.

//* Need to specify which paragraph to style.
// const paragraph0 = document.getElementsByClassName("paragraph")[0];
// paragraph0.style.color = "purple";

// const paragraph1 = document.getElementsByClassName("paragraph")[1];
// paragraph1.style.color = "purple";

const paragraphs = document.getElementsByClassName("paragraph");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "purple"
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//TODO - Grabs elements by their Tag name.

document.getElementsByTagName("h3")[0].style.backgroundColor = "pink";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//TODO - Grabs any element - it's universal.

document.querySelector("#container").style.backgroundColor = "pink";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//