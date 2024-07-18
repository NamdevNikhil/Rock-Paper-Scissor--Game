
let user = 0;
let draw = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const drawScorePara = document.querySelector("#draw-score");
const compScorePara = document.querySelector("#comp-score");

const userNamepara = document.querySelector("#user-name");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    // console.log("computer choice, ", options[index]);
    return options[index];
};

const drawGame = () => {
    draw++;
    drawScorePara.innerText = draw;
    console.log("game was draw.");
    msg.innerText = "Draw. Play again!";
    msg.style.backgroundColor = "brown";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        user++;
        userScorePara.innerText = user;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        comp++;
        compScorePara.innerText = comp;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice, ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice, ", compChoice);

        if(userChoice === compChoice){  
            drawGame();
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                userWin = compChoice === "scissors" ? false : true;
            }
            else{
                userWin = compChoice === "rock" ? false : true;
           }
           showWinner(userWin, userChoice, compChoice);
        }
}

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("user choice, ", userChoice);
        playGame(userChoice);
    });
});