import {mainMenu, allFood} from './game.js'

const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const shopButton = document.getElementById("shopButton");
const menuButton = document.getElementById("menuButton");

feedButton.addEventListener("click", feed);
feedButton.addEventListener("click", loadFood);
playButton.addEventListener("click", play);
shopButton.addEventListener("click", shop);
menuButton.addEventListener("click", menu);

function feed() {
    console.log(Object.keys(allFood))
    console.log(allFood['Dino Nuggets'].hunger)
    
}

function play() {
    console.log("You played with Froggie!");
}

function shop() {
    console.log("Shopping time!");
}

function menu() {
    console.log(mainMenu.name);
    console.log(mainMenu.hungerMeter);
}

function loadFood() {
    let inventory = Object.keys(allFood);
    const foodList = document.getElementById("foodInventory");
    const selectButton = document.createElement("button");
    selectButton.innerText = "Select";
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    let selected = "";
    for (let i=0; i<inventory.length; i++) {
        const item = document.createElement("input");
        item.name = "choice";
        const itemLabel = document.createElement("label");
        itemLabel.className = "block";
        item.type = "radio"     
        itemLabel.innerText = inventory[i];
        // item.className = "activeItem";
        foodList.append(itemLabel);
        itemLabel.append(item);
        item.addEventListener("click", function () {
            selected = inventory[i];
            }
        )
        console.log(inventory[i])
    }
    foodList.append(selectButton);
    foodList.append(cancelButton);
    selectButton.addEventListener("click", function () {
        mainMenu.hungerMeter += (allFood[selected].hunger);
        foodList.innerHTML = '';
        console.log("Froggie ate the " + selected);
    })
    cancelButton.addEventListener("click", function () {
        foodList.innerHTML = '';
    })
  
} 



