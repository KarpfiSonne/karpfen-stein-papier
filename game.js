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
        console.log(`Du hast ${choice} gewählt`);
    } else {
        console.log("was soll das?");
        getHumanChoice();
    } return choice;
}