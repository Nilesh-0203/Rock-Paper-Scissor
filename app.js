let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mesg=document.querySelector("#msg");
const user_score_para=document.querySelector("#user-score");
const comp_score_para=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Draw");
    mesg.innerText="Game was Draw. Play Again ";
    mesg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
    console.log("User choice = ",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp Choice = ",compChoice);
    let userWin=true;
    if(userChoice===compChoice){
        drawGame();
    }
    else if((userChoice==="Rock" && compChoice==="Scissor") || 
       (userChoice==="Paper" && compChoice==="Rock") || 
       (userChoice==="Scissor" && compChoice==="Paper") ){
        userWin=true;
        mesgDisplay(userWin,userChoice,compChoice);
    }
    else{
        userWin=false;
        mesgDisplay(userWin,userChoice,compChoice);
    }

}

const mesgDisplay=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win :)")
        mesg.innerText=`You Win :) Your ${userChoice} beats ${compChoice} `;
        mesg.style.backgroundColor="green";
        userScore++;
        user_score_para.innerText=userScore;
    }
    else{
        console.log("You Lose :(")
        mesg.innerText=`You Lose :( ${compChoice} beats your ${userChoice} `;
        mesg.style.backgroundColor="red";
        compScore++;
        comp_score_para.innerText=compScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
