let userScore = 0;
let botScore = 0;

let choices = document.querySelectorAll(".choice");

let userScoreDisplay = document.querySelector("#user-score");
let botScoreDisplay = document.querySelector("#bot-score");

let msg = document.querySelector("#msg");
let won = document.querySelector("#won");

let reset = document.querySelector("#reset-btn");

reset.addEventListener("click",() => {
    userScore = 0;
    botScore = 0;
    userScoreDisplay.innerHTML = "0";
    botScoreDisplay.innerHTML = "0";
    msg.innerHTML = "Play Your Move";
    won.innerHTML = "";

})

function computerChoice(){
    let arr = ['stone','paper','sissor'];
    let index = Math.floor(Math.random()*3);
    return arr[index];
}

const playGame = (userChoice) => {
    const user = userChoice;
    const bot = computerChoice();
    console.log("user : ",user);
    console.log("bot : ",bot);
    let winner = "d";
    if(user === bot){
        msg.innerHTML = "Bot also selected "+bot;
        winner = "d";
    }else if(user==="paper" && bot==="stone"){
        //user win
        msg.innerHTML = "Bot selected Stone ";
        winner = "u";
    }else if(user==="sissor" && bot==="paper"){
        //user win
        msg.innerHTML = "Bot selected Paper ";
        winner = "u";
    }else if(user==="stone" && bot==="sissor"){
        //user win
        msg.innerHTML = "Bot selected Sissor ";
        winner = "u";
    }else if(user==="stone" && bot==="paper"){
        //bot win
        msg.innerHTML = "Bot selected Paper ";
        winner = "b";
    }else if(user==="paper" && bot==="sissor"){
        //bot win
        msg.innerHTML = "Bot selected Sissor ";
        winner = "b";
    }else if(user==="sissor" && bot==="stone"){
        //bot win
        msg.innerHTML = "Bot selected Stone ";
        winner = "b";
    }

    theWinner(winner);

} 



function theWinner(winner){
    if(winner==="b"){
        won.innerHTML = "Bot win";
        botScore++;
        botScoreDisplay.innerHTML = botScore;
    }else if(winner==="u"){
        won.innerHTML = "User win";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    }else{
        won.innerHTML = "Draw";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})