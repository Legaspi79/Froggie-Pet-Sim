import {mainMenu, allFood, allToys} from './game.js'

const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const shopButton = document.getElementById("shopButton");
const menuButton = document.getElementById("menuButton");

// feedButton.addEventListener("click", feed);
feedButton.addEventListener("click", loadFood);
playButton.addEventListener("click", play);


let hungerBar = document.getElementById("hungerMeter");
let happinessBar = document.getElementById("happinessMeter");
let currentEvent = document.getElementById("currentEvent");

//time
let hungerTimer = setTimeout(decreaseHunger, 60000);
let happinessMeter = setTimeout(decreaseHappiness, 80000);

//animation

let animation = document.getElementById("animation");

    
//Play button
function play() {
    console.log("You played with Froggie!");

    let toyInventory = Object.keys(allToys);
    const toyList = document.getElementById("toyInventory");
    const selectButton = document.createElement("button");
    selectButton.innerText = "Select";
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    let selected = "";
    
    for (let i = 0; i<toyInventory.length; i++) {
        const item = document.createElement("input");
        item.type = "radio";
        item.name = "choice";
        const itemLabel = document.createElement("label");
        itemLabel.className = "block";
        itemLabel.innerText = toyInventory[i];

        toyList.append(itemLabel);
        itemLabel.append(item);
        item.addEventListener("click", function () {
            selected = toyInventory[i];
            }
        )
     }
    toyList.append(selectButton);
    toyList.append(cancelButton);
    selectButton.addEventListener("click", function () {
        if (mainMenu.happinessMeter + (allToys[selected].happiness) > 10) {
            mainMenu.happinessMeter = 10;
            mainMenu.hungerMeter += allToys[selected].hunger;
            hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
            happinessBar.innerText = "Happiness: " + mainMenu.happinessMeter;
            currentEvent.innerText = ("Froggie played with the " + selected);
            toyList.innerHTML = '';
            animation.src = "assetts/frog 1 play.gif";
            let animationTime = setTimeout(backToIdle, 3000);
        }  else {
            console.log(allToys[selected].happiness)
            mainMenu.happinessMeter += (allToys[selected].happiness);
            happinessBar.innerText = "Happiness: " + mainMenu.happinessMeter;
            mainMenu.hungerMeter += allToys[selected].hunger;
            hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
            console.log(mainMenu.hungerMeter);
            toyList.innerHTML = '';
            currentEvent.innerText = ("Froggie played with the " + selected);
            animation.src = "assetts/frog 1 play.gif";
            let animationTime = setTimeout(backToIdle, 3000);
            }
            if (mainMenu.hungerMeter < 1) {

                currentEvent.innerText = ("You played so much that Froggie forgot to eat and DIED");
                animation.src = "assetts/froggie death.png";
                let animationTime = setTimeout(death, 3000);
            }
        
        })
    cancelButton.addEventListener("click", function () {
        toyList.innerHTML = '';
    })
        
}
    
    console.log(mainMenu.happinessMeter);


function loadFood() {
   
    let foodInventory = Object.keys(allFood);
    const foodList = document.getElementById("foodInventory");
    const selectButton = document.createElement("button");
    selectButton.innerText = "Select";
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    let selected = "";
    for (let i=0; i<foodInventory.length; i++) {
        const item = document.createElement("input");
        item.name = "choice";
        item.type = "radio";
        const itemLabel = document.createElement("label");
        itemLabel.className = "block";            
        itemLabel.innerText = foodInventory[i];
        // item.className = "activeItem";
        foodList.append(itemLabel);
        itemLabel.append(item);
        item.addEventListener("click", function () {
            selected = foodInventory[i];
            }
        )
        console.log(foodInventory[i])
    }
    foodList.append(selectButton);
    foodList.append(cancelButton);
    selectButton.addEventListener("click", function () {
        if (mainMenu.hungerMeter + (allFood[selected].hunger) > 10) {
            currentEvent.innerText = ("Froggie won't be able to finish that right now!");
        } else {
            mainMenu.hungerMeter += (allFood[selected].hunger);
        hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
        foodList.innerHTML = '';
        currentEvent.innerText = ("Froggie ate the " + selected);
  
        //Changes  toFeeding Animation
        animation.src = "assetts/frog 1 eating.gif";
        let animationTime = setTimeout(backToIdle, 99999999);
        }
        
    })
    cancelButton.addEventListener("click", function () {
        foodList.innerHTML = '';
    })
  
} 

//function to decrease hunger over time

function decreaseHunger() {
    console.log('hunger decreased');  
    mainMenu.hungerMeter -= 1;    
    hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
    if (mainMenu.hungerMeter == 0) {
        currentEvent.innerText = ("Froggie got too hungry and DIED :(");
        animation.src = "assetts/froggie death.png";
        let animationTime = setTimeout(death, 3000);
    } else {
        console.log(mainMenu.hungerMeter);
    hungerTimer = setTimeout(decreaseHunger, 60000);
    }
    
    
}

function decreaseHappiness() {
    console.log('happiness decreased');  
    mainMenu.happinessMeter -= 1;    
    happinessBar.innerText = "Happiness: " + mainMenu.happinessMeter;
    if (mainMenu.happinessMeter < 1) {
        currentEvent.innerText = ("Froggie DIED of unhappiness :(");
        animation.src = "assetts/froggie death.png";
        let animationTime = setTimeout(death, 3000);
    } else {
        console.log(mainMenu.happinessMeter);
    hungerTimer = setTimeout(decreaseHappiness, 80000);
    }
    
    
}


 

function backToIdle() {
    animation.src = "assetts/frog 1 idle.gif";
}

function death() {
    animation.src = "assetts/froggie death.png";
}