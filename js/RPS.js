const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiseBtns = document.querySelectorAll(".choiseBtn");
let player;
let computer;
let result;

choiseBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Hráč: ${player}`;
    computerText.textContent = `Počítač: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = "KÁMEN";
            break;
        case 2:
            computer = "NŮŽKY";
            break;
        case 3:
            computer = "PAPÍR";
            break;
    }
}

function checkWinner() {
    if(player == computer){
        return "Remíza!";
    }
    else if(computer == "KÁMEN"){
        return (player == "PAPÍR") ? "Vyhrál jsi!" : "Prohrál jsi!"
    }
    else if(computer == "PAPÍR"){
        return (player == "NŮŽKY") ? "Vyhrál jsi!" : "Prohrál jsi!"
    }
    else if(computer == "NŮŽKY"){
        return (player == "KÁMEN") ? "Vyhrál jsi!" : "Prohrál jsi!"
    }
}