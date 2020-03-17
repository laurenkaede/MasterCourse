//TODO Query Selector and Query Selector All

// Selects all 'li's' on the page.
document.querySelectorAll("li");

// Selects only the first 'li' on the page.
document.querySelector("li");

// Selects the first id heading element on the page.
document.querySelector("#heading");

// Selects the first class .list parent elements on the page.
document.querySelector(".list-parent");

// Selects all class .green elements on the page.
document.querySelectorAll(".green");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const listItems = document.querySelectorAll("li:nth-child(even)");
console.log(listItems);
console.log(listItems.length);

for(let i=0; i < listItems.length; i++){
    listItems[i].style.color = "lightgreen";
    }