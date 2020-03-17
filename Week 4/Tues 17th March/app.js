// document.getElementById("heading").style.color = "black"
// document.getElementById("heading").style.backgroundColor = "yellow"

// const myHeading = document.getElementById("heading");
// myHeading.addEventListener("click",()=>{
// myHeading.style.color = "red";
// });

// const heading = document.getElementById("heading");
// const input = document.getElementById("input");
// const button = document.getElementById("button");

// button.addEventListener("click",()=>{
//     heading.style.color = input.value;
//     });

const list = document.getElementsByTagName("li");
const notOrange = document.getElementsByClassName("not-orange");

console.log(list.length);
console.log(list[0]);
console.log(list[3]);
console.log(list);

list[0].style.color = "red";

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange";
}

for (let i = 0; i < notOrange.length; i++) {
    notOrange[i].style.color = "red";
}