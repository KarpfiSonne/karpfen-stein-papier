function getComputerChoice() {
    let rng = Math.random() * 100 +1;
    if (rng < 33.33) {
        return "karpfen"
    } else if (rng < 66.66) {
        return "stein"
    } else {
        return "papier"
    }
}

function getHumanChoice() {
    choice = prompt("Karpfen, Stein oder Papier?").toLowerCase();
    if (choice == "karpfen" || choice == "stein" || choice == "papier") {
        console.log(`du hast ${choice} gewählt`);
    } else {
        console.log("was soll das?");
        getHumanChoice();
    } return choice;
}

let humanScore = 0
let computerScore = 0

function playRound () {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`der computer hat ${computerChoice} gewählt`);
    if ((humanChoice === "karpfen" && computerChoice === "stein") || (humanChoice === "papier" && computerChoice === "karpfen") ) {
        winner = "computer";
    } else {
        winner = "mensch";
    } 
    console.log(`${winner} hat gewonnen`);
    return winner;
}

function playGame() {
        playRound();
        if (winner = "computer") {
            ++computerScore
        } else {
            ++humanScore
        };
        if (humanScore < 5 || computerScore < 5) {
            playGame()
        } else {
            winner();
            console.log(`${gameWinner} hat das spiel gewonnen`)
            humanScore = 0
            computerScore = 0
        }

}

function winner() {
    if (humanScore == 5) {
        gameWinner = "mensch"
    } else {
        gamewinner = "computer"
    }
    return gameWinner;
}