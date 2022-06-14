export const allFood = {
    "Sundae": {
        hunger: 1
    },
    "Tiramisu": {
        hunger: 2
    },
    "Dino Nuggets": {
        hunger: 3
    },
    "Tuna Sashimi": {
        hunger: 2
    }

}

export const allToys = {
    "Toy Cellphone": {
        happiness: 2,
        hunger: -1
    },
    "Bionicle Toa Inika Set": {
        happiness: 4,
        hunger: -2
    },
    "Frisbee": {
        happiness: 3,
        hunger: -4
    },
    "Butterfly YoYo": {
        happiness: 1,
        hunger: -1
    }

}

export const mainMenu = {
    name: "Froggie",
    hungerMeter: 5,
    happinessMeter: 5
}

//STATUS BAR

let hungerBar = document.getElementById("hungerMeter");
let happinessBar = document.getElementById("happinessMeter");
hungerBar.innerText = "Hunger: " + mainMenu.hungerMeter;
happinessBar.innerText = "Happiness: " + mainMenu.happinessMeter;
