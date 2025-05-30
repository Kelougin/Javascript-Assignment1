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
const verbHolder = document.querySelector('section div:nth-child(2) ol'); //Select ol for verbs
let verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]; //Verb array
for (let i = 0; i < verbArray.length; i ++){ //For loop to cycle through verbs
    let list = document.createElement("li"); //Creates li element
    verbHolder.append(list); //Add li to ol
    list.textContent = `${verbArray[i]}`; //Add text content for li
}

//Setup verb button
const verbButton = document.querySelector('#verb'); //Select verb button
let verbIncrement = 0; //Set verb increment variable
verbButton.addEventListener("click", selectVerb); //Add event to button on click calls selectVerb function
function selectVerb(){
    console.log(`${verbArray[verbIncrement]}`);
    playbackArray[1] = verbArray[verbIncrement]; //Add verb to playback array
    if (verbIncrement > 4){ //Check if increment is greater than 4
        verbIncrement = 0; //reset increment to 0
    }else{
        verbIncrement ++; //Increase increment
    }
}

//Set adjective display
const adjectiveHolder = document.querySelector('section div:nth-child(3) ol'); //Select ol for adjectives
let adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"]; //Adjectives array
for (let i = 0; i < adjectiveArray.length; i ++){ //For loop to cycle through adjectives
    let list = document.createElement("li"); //Creates li element
    adjectiveHolder.append(list); //Add li to ol
    list.textContent = `${adjectiveArray[i]}`; //Add text content for li
}

//Setup adjective button
const adjectiveButton = document.querySelector('#adjective'); //Select adjective button
let adjectiveIncrement = 0; //Set adjective increment variable
adjectiveButton.addEventListener("click", selectAdjective); //Add event to button on click calls selectAdjective function
function selectAdjective(){
    console.log(`${adjectiveArray[adjectiveIncrement]}`);
    playbackArray[2] = adjectiveArray[adjectiveIncrement]; //Add adjective to playback array
    if (adjectiveIncrement > 4){ //Check if increment is greater than 4
        adjectiveIncrement = 0; //reset increment to 0
    }else{
        adjectiveIncrement ++; //Increase increment
    }
}

//Setup animal display
const animalHolder = document.querySelector('section div:nth-child(4) ol');
let animalArray = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
for (let i = 0; i < animalArray.length; i++){
    let list = document.createElement('li');
    animalHolder.append(list);
    list.textContent =`${animalArray[i]}`;
}

//Setup animal button
const animalButton = document.querySelector('#animal');
let animalIncrement = 0;
animalButton.addEventListener("click", selectAnimal);
function selectAnimal(){
    console.log(`${animalArray[animalIncrement]}`);
    playbackArray[3] = animalArray[animalIncrement];
    if (animalIncrement > 5){
        animalIncrement = 0;
    }else{
        animalIncrement ++;
    }
}

//Setup location display
const locationHolder = document.querySelector('section div:nth-child(5) ol');
let locationArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
for (let i =0; i < locationArray.length; i ++){
    let list = document.createElement('li');
    locationHolder.append(list);
    list.textContent =`${locationArray[i]}`;
}

//Setup location button
const locationButton = document.querySelector('#location');
let locationIncrement = 0;
locationButton.addEventListener("click", selectLocation);
function selectLocation(){
    console.log(`${locationArray[locationIncrement]}`);
    playbackArray[4] = locationArray[locationIncrement];
    if (locationIncrement > 4){
        locationIncrement = 0;
    }else{
        locationIncrement ++;
    }
}

//Start playback setup
const playback = document.querySelector('#playback'); //Selects playback button
let playbackArray = [nounArray[0], verbArray[0], adjectiveArray[0], animalArray[0], locationArray[0]]; //Set up empty array for play
playback.addEventListener("click", playbackFunction) //Add event to button on click that calls playbackFunction
function playbackFunction(){
    console.log(`${playbackArray[0]}` + " " + `${playbackArray[1]}`+ " " + `${playbackArray[2]}`+ " " + `${playbackArray[3]}`+ " " + `${playbackArray[4]}.`);
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
    console.log(`${nounArray[randomArray[0]]}` + " " + `${verbArray[randomArrayTwo[0]]}` + " " + `${adjectiveArray[randomArrayTwo[1]]}`+ " " + `${animalArray[randomArray[1]]}`+ " " + `${locationArray[randomArrayTwo[2]]}.`);
}