//Set title with Javascript
const title = document.querySelector('h1'); //Store h1 in variable
title.textContent = "Story Maker"; //Set title

//Set nouns
const nounHolder = document.querySelector('section div:nth-child(1) ol'); //Select ol for nouns
let nounArray = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; // Set noun array
for (let i = 0; i < nounArray.length; i ++){
    let list = document.createElement("li");
    nounHolder.append(list);
    list.textContent = `${nounArray[i]}`;
}