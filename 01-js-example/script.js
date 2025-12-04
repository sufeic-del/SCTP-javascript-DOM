console.log("hello world");

let btn= document.querySelector("#changeBtn");
// events are actions that the user perform on the webpage
// example events: click, hover select, move, scroll up, scroll down

btn.addEventListener("click", function () {
// string is an object
// object has data and functions
let s = "the quick brown fox jumps over the lazy dog";
console.log(s.toLowerCase());

// we access the DOM using document
// what is the data of the document? The CSS and HTML
// it has function to select and add/modify HTML elements

// querySelector can select an element and return it
// as a DOM object
let heading = document.querySelector("h1");
heading.style.backgroundColor = "yellow";

let heading2 = document.querySelector("h2");
heading2.style.color = "pink";



// Select by id, use #
// eg: seledt the element with id "skills"
let skills =document.querySelector("#skills");
skills.style.border = "1px solid black";

// querySelector will only select the first one
let expertSkill = document.querySelector(".expert");
expertSkill.style.backgroundColor = "yellow";

// document.querySelectorAll will return all elements
// that matches
let allExpertSkills = document.querySelectorAll(".expert");
console.log(allExpertSkills);

// use a for loop to extract one element at a time from
// the array and change their color to red
for (let skill of allExpertSkills) {
    skill.style.color = "red";
}

let link = document.querySelector("#search");
link.href = "https://www.bing.com";
link.innerText = "Bing";
})




