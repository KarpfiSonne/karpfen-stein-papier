function getComputerChoice() {
    let rng = Math.random() * 100 +1;
    if (rng <= 33) {
        return "karpfen"
    } else if (rng <= 66) {
        return "stein"
    } else {
        return "papier"
    }
}