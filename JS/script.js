//Set title with Javascript
const title = document.querySelector('h1'); //Store h1 in variable
title.textContent = "Story Maker"; //Set title

//Set nouns display
const nounHolder = document.querySelector('section div:nth-child(1) ol'); //Select ol for nouns
let nounArray = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; // Set noun array
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
    console.log(`${nounArray[nounIncrement]}`); //Console log for testing
    playbackArray[0] = nounArray[nounIncrement]; //Store current noun in playback array
    highlightNoun(); //Call function
    if (nounIncrement > 5){ //Check if increment is greater than 5
        nounIncrement = 0; //Resets increment
    }else{
        nounIncrement ++; //Increment to cycle to next noun
    }
}

//Setup noun highlight
function highlightNoun(){
    if (playbackArray[0] === "The turkey"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(7)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:first-child'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[0] === "Mom"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:first-child'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(2)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[0] === "Dad"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(2)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(3)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[0] === "The dog"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(3)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(4)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[0] === "My teacher"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(4)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(5)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[0] === "The elephant"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(5)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(6)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[0] === "The cat"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(6)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(1) ol li:nth-child(7)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else{ //Else if for some reason no word is selected remove highlight from each box
        for (let i = 1; i < 8; i ++){ //For loop to go through elements
            let removeHighlight = document.querySelector(`section div:nth-child(1) ol li:nth-child(${i})`); //Select element
            removeHighlight.style.boxShadow = "0 0 0 0" ;//Remove box shadow
        }
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
    console.log(`${verbArray[verbIncrement]}`); //Console log for testing
    playbackArray[1] = verbArray[verbIncrement]; //Add verb to playback array
    highlightVerb(); //Call function
    if (verbIncrement > 4){ //Check if increment is greater than 4
        verbIncrement = 0; //reset increment to 0
    }else{
        verbIncrement ++; //Increase increment
    }
}

//Setup Verb highlight
function highlightVerb(){
    if (playbackArray[1] === "sat on"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(6)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(2) ol li:first-child'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[1] === "ate"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(2) ol li:first-child'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(2)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[1] === "danced with"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(2)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(3)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[1] === "saw"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(3)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(4)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[1] === "doesn't like"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(4)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(5)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[1] === "kissed"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(5)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(2) ol li:nth-child(6)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else{ //Else if for some reason no word is selected remove highlight from each box
        for (let i = 1; i < 7; i ++){ //For loop to go through elements
            let removeHighlight = document.querySelector(`section div:nth-child(2) ol li:nth-child(${i})`); //Select element
            removeHighlight.style.boxShadow = "0 0 0 0" ;//Remove box shadow
        }
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
    console.log(`${adjectiveArray[adjectiveIncrement]}`); //Console log for testing
    playbackArray[2] = adjectiveArray[adjectiveIncrement]; //Add adjective to playback array
    highlightAdjective(); //Call function
    if (adjectiveIncrement > 4){ //Check if increment is greater than 4
        adjectiveIncrement = 0; //reset increment to 0
    }else{
        adjectiveIncrement ++; //Increase increment
    }
}

// Setup adjective highlights
function highlightAdjective(){
    if (playbackArray[2] === "a funny"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(6)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(3) ol li:first-child'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[2] === "a scary"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(3) ol li:first-child'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(2)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[2] === "a goofy"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(2)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(3)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[2] === "a slimy"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(3)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(4)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[2] === "a barking"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(4)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(5)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[2] === "a fat"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(5)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(3) ol li:nth-child(6)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else{ //Else if for some reason no word is selected remove highlight from each box
        for (let i = 1; i < 7; i ++){ //For loop to go through elements
            let removeHighlight = document.querySelector(`section div:nth-child(3) ol li:nth-child(${i})`); //Select element
            removeHighlight.style.boxShadow = "0 0 0 0" ;//Remove box shadow
        }
    }
}

//Setup animal display
const animalHolder = document.querySelector('section div:nth-child(4) ol'); //Select ol for animals
let animalArray = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]; //Animal array
for (let i = 0; i < animalArray.length; i++){ //For loop to cycle through animals
    let list = document.createElement('li'); //Creates li element
    animalHolder.append(list); //Add li to ol
    list.textContent =`${animalArray[i]}`; //Add text content for li
}

//Setup animal button
const animalButton = document.querySelector('#animal'); //Select animal button
let animalIncrement = 0; //Set animal increment variable
animalButton.addEventListener("click", selectAnimal); //Add event to button on click calls selectAnimal function
function selectAnimal(){
    console.log(`${animalArray[animalIncrement]}`); //Console log for testing
    playbackArray[3] = animalArray[animalIncrement]; //Add animal to playback array
    highlightAnimal(); //Call function
    if (animalIncrement > 5){ //Check if increment is greater than 5
        animalIncrement = 0; //reset increment to 0
    }else{
        animalIncrement ++; //Increase increment
    }
}

//Setup animal highlight
function highlightAnimal(){
    if (playbackArray[3] === "goat"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(7)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:first-child'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[3] === "monkey"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:first-child'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(2)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[3] === "fish"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(2)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(3)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[3] === "cow"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(3)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(4)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[3] === "frog"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(4)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(5)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[3] === "bug"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(5)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(6)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[3] === "worm"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(6)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(4) ol li:nth-child(7)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else{ //Else if for some reason no word is selected remove highlight from each box
        for (let i = 1; i < 8; i ++){ //For loop to go through elements
            let removeHighlight = document.querySelector(`section div:nth-child(4) ol li:nth-child(${i})`); //Select element
            removeHighlight.style.boxShadow = "0 0 0 0" ;//Remove box shadow
        }
    }
}

//Setup location display
const locationHolder = document.querySelector('section div:nth-child(5) ol'); //Select ol for location
let locationArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; //Location array
for (let i =0; i < locationArray.length; i ++){ //For loop to cycle through locations
    let list = document.createElement('li'); //Creates li element
    locationHolder.append(list); //Add li to ol
    list.textContent =`${locationArray[i]}`; //Add text content for li
}

//Setup location button
const locationButton = document.querySelector('#location'); //Select location button
let locationIncrement = 0; //Set location increment variable
locationButton.addEventListener("click", selectLocation); //Add event to button on click calls selectLocation function
function selectLocation(){
    console.log(`${locationArray[locationIncrement]}`); //Console log for testing
    playbackArray[4] = locationArray[locationIncrement]; //Add location to playback array
    highlightLocation(); //Call function
    if (locationIncrement > 4){ //Check if increment is greater than 4
        locationIncrement = 0; //reset increment to 0
    }else{
        locationIncrement ++; //Increase increment
    }
}

//Setup location highlight
function highlightLocation(){
    if (playbackArray[4] === "on the moon"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(6)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(5) ol li:first-child'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[4] === "on the chair"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(5) ol li:first-child'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(2)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[4] === "in my spaghetti"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(2)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(3)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[4] === "in my soup"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(3)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(4)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[4] === "on the grass"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(4)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(5)'); //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else if (playbackArray[4] === "in my shoes"){ //Check word in playback array
        let removeHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(5)'); //Selects element to remove box shadow
        let addHighlight = document.querySelector('section div:nth-child(5) ol li:nth-child(6)');  //Select element to add box shadow too
        removeHighlight.style.boxShadow = "0 0 0 0"; //Remove box shadow with style
        addHighlight.style.boxShadow = "0 0 3px 2px white"; //Add box shadow using style
    } else{ //Else if for some reason no word is selected remove highlight from each box
        for (let i = 1; i < 7; i ++){ //For loop to go through elements
            let removeHighlight = document.querySelector(`section div:nth-child(5) ol li:nth-child(${i})`); //Select element
            removeHighlight.style.boxShadow = "0 0 0 0" ;//Remove box shadow
        }
    }
}

//Setup text display
const buttonSection = document.querySelector('main section:nth-child(2) div:nth-child(2)'); //Select button section
const displayPlayback = document.createElement('p'); //Create element p
const displayRandom = document.createElement('p'); //Creat element p
buttonSection.append(displayPlayback, displayRandom); //Add elements p to button section

//Start playback setup
const playback = document.querySelector('#playback'); //Selects playback button
let playbackArray = [nounArray[0], verbArray[0], adjectiveArray[0], animalArray[0], locationArray[0]]; //Set up empty array for play
playback.addEventListener("click", playbackFunction) //Add event to button on click that calls playbackFunction
function playbackFunction(){
    displayPlayback.textContent = `Current playback: ${playbackArray[0]}` + " " + `${playbackArray[1]}`+ " " + `${playbackArray[2]}`+ " " + `${playbackArray[3]}`+ " " + `${playbackArray[4]}.`; //Display current story in playback
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
    //Display a random story
    displayRandom.textContent = `Random Story: ${nounArray[randomArray[0]]}` + " " + `${verbArray[randomArrayTwo[0]]}` + " " + `${adjectiveArray[randomArrayTwo[1]]}`+ " " + `${animalArray[randomArray[1]]}`+ " " + `${locationArray[randomArrayTwo[2]]}.`;
}