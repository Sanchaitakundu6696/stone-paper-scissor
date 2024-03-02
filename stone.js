let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#yourScore");
const compScorePara = document.querySelector("#comScore");
const reStart = document.querySelector(".reStart");

const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");

const geneComp = () =>{
    const options = ["rock","paper","scissors"];
    let optnIdx = Math.floor(Math.random() *3);
    return options[optnIdx];

}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        result.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        result.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
    }
};

const reStartBtn = ()=>{
    userScore = 0;
    userScorePara.innerText = 0;
    compScore = 0;
    compScorePara.innerText = 0;
    result.innerText = "Show Result";
    result.style.backgroundColor = "#000C66";

}

const playGame = (userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice = geneComp();
    console.log("computer choice is",compChoice);

    if(userChoice === compChoice){
        result.innerText = `The match was draw! Both choose ${userChoice}`;
        result.style.backgroundColor = "#000C66";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

reStart.addEventListener("click",reStartBtn);