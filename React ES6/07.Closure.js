let score = 0;

let increaseScore = (points) => {
    score += points;
    console.log(`+${score}pts`);
}
let decreaseScore = (points) => {
    score -= points;
    console.log(`-${score}pts`);
}
let display = () => {
    return score;
}
score = 10000
increaseScore(10);
increaseScore(10);
decreaseScore(10);
console.log(display());


function game() {
    let score = 0;

    let increaseScore = (points) => {
        score += points;
        console.log(`+${score}pts`);
    }
    let decreaseScore = (points) => {
        score -= points;
        console.log(`-${score}pts`);
    }
    let display = () => {
        return score;
    }
    
    return {increaseScore, decreaseScore, display};
}

const ngame = new game();
ngame.increaseScore(10);
ngame.increaseScore(10);
ngame.decreaseScore(10);
console.log(ngame.display());
