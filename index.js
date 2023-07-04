document.getElementById("btn").style.fontSize = "2em";
// document.getElementById("btn1").style.fontSize = "2em";

function userChoice(){
let a;
a=(window.prompt("among paper , rock & scissor choose yours")).toLowerCase();

if( (a == "rock" ) || (a == "scissor" ) || (a == "paper" ) )
{  
    // alert("fine good choice");
    c = compChoice();
    result = playRound(a,c);
    alert(result);

}
else{
    alert("wrong choice");
}
}
function compChoice()
{   
    let c;
    const choice = ['rock','paper','scissor'];
    const index = Math.floor( Math.random() * choice.length );
    c = choice[index];
    return c;
    // alert("computer choice is " + c);
    // console.log(c);
}
function playRound( a,b )
{
    let user = 0;
    let computer = 0;
    if( a == c){
    alert("its a draw");
}
    else if (( a == "paper" && c == "rock" ) || ( a == "scissor" && c == "paper" ) || ( a == "rock" && c == "scissor" ) )
    {
    return(` you win ${a}beats ${c}`);
    user +=1 ;
    document.getElementById("y").value = user;
    }
    else
    {
        return(`you lose ${c} beats ${a}` );
        computer +=1;
        document.getElementById("comp").value = computer;
    }
}