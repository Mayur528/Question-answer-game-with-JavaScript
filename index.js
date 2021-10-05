/*importing external files*/

const readline=require("readline-sync");
const chalk =require("chalk")
const print=console.log ;
let score=0; 

startTheGame();//start tha game


function startTheGame(){
  welcomeToGame()
  startGame()
  finaleResult()
}



/*welcome massage*/
function welcomeToGame(){
print(chalk.green `***************************`);
print(chalk.green`******** welcome  *********`);
print(chalk.green `***************************`);
const name =readline.question("what is your name? \n") ;
print (chalk.yellow.bold`welcome to the game ${name}`);

  
}

/*
  game start 
*/
/* first we made a ask function so that we dont have to repeat the same question patter again */
function startGame(){
 ask("what is my favorite food?","dosa")
  ask("what is my hobby?","reading")
  ask("whhich is my favorite book?","harry")
}
  function ask(question,answer){
    const ans=readline.question(`${question}`);
if(ans.toLowerCase().trim()===answer){
print(chalk.green`congratulation!😊 you have scored`);
  score+=1;
  print(`your score :${score}`);
}else {
  print(chalk.red`oops!😬 wrong answer`);
  print(chalk.blue`your score :${score}`);
  
} 
  }



/* finale result*/

function finaleResult(){
    if(score===3){
  print(chalk.blue.underline`you have scored perferct`);
    }else{
  print(chalk.blue`your finale score is ${score}`);
    }
}