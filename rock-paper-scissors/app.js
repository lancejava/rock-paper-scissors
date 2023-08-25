let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".round");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices =['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_div.innerHTML = userScore
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_div.innerHTML = userScore
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lose!";
}

function draw(userChoice, computerChoice){
    result_div.innerHTML = convertToWord(userChoice) + " is equal to " + convertToWord(computerChoice) + ". It's a draw!";
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    switch (userChoice + computerChoice){
        case("rs"):
        case("pr"):
        case("sp"):
            win(userChoice, computerChoice);
            break;
        case("sr"):
        case("rp"):
        case("ps"):
            lose(userChoice, computerChoice);
            break;
        case("rr"):
        case("pp"):
        case("ss"):
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    }) 
}

main();
