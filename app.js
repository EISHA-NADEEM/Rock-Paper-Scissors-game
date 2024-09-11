let userScore = 0;
let compScore = 0;
const choices=document.querySelectorAll("choice");

const genCompChoice=()=>{
const options=["rock", "paper", "scissors"];
const randIdx=Math.floor(math.random*3);
return options[randIdx];
}
const drawGame=()=>{
    console.log("game is draw.");
};
const playGame=(userChoice)=>{
    console.log("user choice is = " , userChoice);
const compChoice=genCompChoice();
console.log("comp choice is =", compChoice);

if(userChoice===compChoice)
{
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
userWin=compChoice==="paper" ? false:true;
    }elseif(user==="paper")
}

};

choices.forEach((choice)=>{
console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    console.log("Choice was clicked",userChoice);
});
});
