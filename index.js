document.getElementById("btn").style.fontSize = "2em";
// document.getElementById("btn1").style.fontSize = "2em";
let user = 0;
let computer = 0;


function userChoice(){
let a;
a=(window.prompt("among paper , rock & scissor choose yours")).toLowerCase();
if( (a == "rock" ) || (a == "scissor" ) || (a == "paper" ) )
{  
    // alert("fine good choice");
    c = compChoice();
    let result = playRound(a,c);
    alert(result);
}
else{
    alert("wrong choice. please make sure that your choice is either : Rock , paper or scissor");
}
if (user === 5 || computer === 5) {
    endGame();
    return;
}
else {
    userChoice();
}

}
function compChoice()
{   
    const choice = ['rock','paper','scissor'];
    const index = Math.floor( Math.random() * choice.length );
    let c = choice[index];
    return c;
    // alert("computer choice is " + c);
    // console.log(c);
}
function playRound( a,c )
{
    if( a == c)
    {
    return("its a draw");

    }
    else if (( a == "paper" && c == "rock" ) || ( a == "scissor" && c == "paper" ) || ( a == "rock" && c == "scissor" ) )
    {
        user++ ;
        document.getElementById("y").value = user;
        return(` you win ${a} beats ${c}`);
    }
    else
    {
        computer++;
        document.getElementById("comp").value = computer;
        return(`you lose ${c} beats ${a}` );
    } 
}
function endGame() {
    if (user === 5) {
      alert("Congratulations! You won the game.");
    } else {
      alert("Oops! Computer won the game.");
    }
   resetScores()
}
function resetScores() {
    user = 0;
    computer = 0;
  }
  
  userChoice();