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
const nounButton = document.querySelector('#noun'); //Select button for noun
let nounIncrement = 0; //variable for cycling through array
nounButton.addEventListener("click", selectNoun); //Add event to button on click, that call selectNoun function
function selectNoun(){ //Function for selecting noun
    console.log(`${nounArray[nounIncrement]}`);
    playbackArray[0] = nounArray[nounIncrement]; //Store current noun in playback array
    if (nounIncrement > 5){ //Check if increment is greater than 5
        nounIncrement = 0; //Resets increment
    }else{
        nounIncrement ++; //Increment to cycle to next noun
    }
}

//Set Verb display
const verbHolder = document.querySelector('section div:nth-child(2) ol');
let verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
for (let i = 0; i < verbArray.length; i ++){
    let list = document.createElement("li"); //Creates li element
    verbHolder.append(list);
    list.textContent = `${verbArray[i]}`;
}

//Setup verb button
const verbButton = document.querySelector('#verb');
let verbIncrement = 0;
verbButton.addEventListener("click", selectVerb);
function selectVerb(){
    console.log(`${verbArray[verbIncrement]}`);
    playbackArray[1] = verbArray[verbIncrement];
    if (verbIncrement > 4){
        verbIncrement = 0;
    }else{
        verbIncrement ++;
    }
}

//Start playback setup
const playback = document.querySelector('#playback'); //Selects playback button
let playbackArray = [nounArray[0], verbArray[0]]; //Set up empty array for play
playback.addEventListener("click", playbackFunction) //Add event to button on click that calls playbackFunction
function playbackFunction(){
    console.log(`${playbackArray[0]}` + " " + `${playbackArray[1]}`);
}

//Start random short story
const randomButton = document.querySelector('#random') //Selects the random button
let randomArray = []; //Array for storing random numbers for noun and animal
let randomArrayTwo = []; ///Array for storing random number for other 3 columns
randomButton.addEventListener("click", randomStory); //Add event to button on click that calls randomStory function
function randomStory(){
    for (let i = 0; i < 2; i ++){ //for loop to generate 2 random numbers
        randomArray[i] = Math.floor(Math.random() * 7); //Generate and store random number in array
    }
    for (let i = 0; i < 3; i ++){ //for loop to generate 3 random numbers
        randomArrayTwo[i] = Math.floor(Math.random() * 6); //Generate and store random number in array
    }
    console.log(`${nounArray[randomArray[0]]}` + " " + `${verbArray[randomArrayTwo[0]]}`);
}