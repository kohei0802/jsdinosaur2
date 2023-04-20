let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;

//function for score
let scoreCounter = () => {
    playerScore++;

    //unlike sh, ${} is used instead of $()
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start Game
//interval = setInterval(scoreCounter, 200)
window.addEventListener("keydown", (start) => {
    //console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        let x = 1.05 * 1.5;
        road.firstElementChild.style.animation = `roadAnimate ${x}s linear infinite`;
        cloud.firstElementChild.style.animation = `cloudAnimate 50s linear infinite`;

        interval = setInterval(scoreCounter, 200);
    }
})

window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowUp") {
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500)
        }
    }
})

let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockRight = parseInt(getComputedStyle(block).getPropertyValue("right"));
    if (dinoBottom <= 90 && blockRight >= 1030 && blockRight <= 1100) {
        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";

        clearInterval(interval);
        playerScore = 0;
    }


}, 10)