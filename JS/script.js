//Set title with Javascript
const title = document.querySelector('h1'); //Store h1 in variable
title.textContent = "Story Maker"; //Set title

//Set nouns display
const nounHolder = document.querySelector('section div:nth-child(1) ol'); //Select ol for nouns
let nounArray = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; // Set noun array
for (let i = 0; i < nounArray.length; i ++){ //For loop to cycle through array
    let list = document.createElement("li"); //Creates li element
    nounHolder.append(list); //Add li to ol element
    list.textContent = `${nounArray[i]}`; //Displays noun in li's text content
}

 //Setup noun button
const nounButton = document.querySelector('#noun');
let nounIncrement = 0;
nounButton.addEventListener("click", selectNoun);
function selectNoun(){
    console.log(`${nounArray[nounIncrement]}`);
    playbackArray[0] = nounArray[nounIncrement];
    if (nounIncrement > 5){
        nounIncrement = 0;
    }else{
        nounIncrement ++;
    }

}

//Start playback setup
const playback = document.querySelector('#playback');
let playbackArray = [];
playback.addEventListener("click", playbackFunction)
function playbackFunction(){
    console.log(`${playbackArray[0]}`);
}

//Start random short story
const randomButton = document.querySelector('#random')
let randomArray = [];
randomButton.addEventListener("click", randomStory);
function randomStory(){
    for (let i = 0; i < 5; i ++){
        randomArray[i] = Math.floor(Math.random() * 7);
    }
    console.log(`${nounArray[randomArray[0]]}`);
}