import {mainMenu, allFood, allToys} from './game.js'

const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const shopButton = document.getElementById("shopButton");
const menuButton = document.getElementById("menuButton");

// feedButton.addEventListener("click", feed);
feedButton.addEventListener("click", loadFood);
playButton.addEventListener("click", play);
shopButton.addEventListener("click", shop);
menuButton.addEventListener("click", menu);

let hungerBar = document.getElementById("hungerMeter");
let happinessBar = document.getElementById("happinessMeter");
let currentEvent = document.getElementById("currentEvent");

// function feed() {
//     console.log(Object.keys(allFood))
//     console.log(allFood['Dino Nuggets'].hunger)
    
// }


//Play button
function play() {
    console.log("You played with Froggie!");
    // mainMenu.happinessMeter += 1;
    // mainMenu.hungerMeter -=1;
    // happinessBar.innerText = "Happiness: " + mainMenu.happinessMeter;
    // hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
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
        }  else {
            console.log(allToys[selected].happiness)
            mainMenu.happinessMeter += (allToys[selected].happiness);
            happinessBar.innerText = "Happiness: " + mainMenu.happinessMeter;
            mainMenu.hungerMeter += allToys[selected].hunger;
            hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
            console.log(mainMenu.hungerMeter);
            toyList.innerHTML = '';
            currentEvent.innerText = ("Froggie played with the " + selected);
            }
        
        })
    cancelButton.addEventListener("click", function () {
        toyList.innerHTML = '';
    })
        
}
    
    console.log(mainMenu.happinessMeter);


function shop() {
    console.log("Shopping time!");
}

function menu() {
    console.log(mainMenu.name);
    console.log(mainMenu.hungerMeter);
    console.log(mainMenu.happinessMeter);
}

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
        //console.log("Froggie ate the " + selected);
        }
        
    })
    cancelButton.addEventListener("click", function () {
        foodList.innerHTML = '';
    })
  
} 



