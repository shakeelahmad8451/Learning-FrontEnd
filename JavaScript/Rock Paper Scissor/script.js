// we need two variables to record the score of the user and system

let userScore = 0;
let systemScore = 0;

let msg = document.querySelector('#remarks');


//To access the scoreboard to change the score on screen
let userScoreBoard = document.querySelector('#UserScores');
let systemScoreBoard = document.querySelector('#SystemScores');


// access all the choices in the array
const choices = document.querySelectorAll(".choices");




// startGame function a call back function
const startGame = (userChoice) => {
    console.log('choice was clicked of ' + userChoice);

    // all availaible set of choices for system
    let allChoices = ['Rock', 'Paper', 'Scissor'];



    // now we need to generate a random number for computer choice  
    let sysChoice = allChoices[Math.floor(Math.random() * 3)];

    console.log('system choice ' + sysChoice);
    let systemchoicetext = document.getElementById('syschoice');
    systemchoicetext.innerText = sysChoice;
    console.log(sysChoice);


    // Decision Making, who wins ?
    if (userChoice === sysChoice) {
        console.log('Game Draw ');
        msg.innerText = 'Match Drawn. Play Again !!!';
        msg.style.color = 'rgba(218, 5, 79, 0.8)';

        console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);

    }


    else if (userChoice === 'Rock') {
        if (sysChoice == 'Paper') {
            console.log('You Lose. Try Again.');
            msg.innerText = 'You lost the game.Try Again.';
            msg.style.color = 'rgba(181, 2, 2, 0.8)';

            systemScore++;
            console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);

            systemScoreBoard.innerText = systemScore;
            userScoreBoard.innerText = userScore;
        }
        else {
            console.log('You Win !!!!');
            msg.innerText = 'You Win Congratulations!!!';
            userScore++;
            console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);
            msg.style.color = 'rgba(0, 52, 2, 0.8)';

            userScoreBoard.innerText = userScore;
        }
    }


    else if (userChoice === 'Paper') {
        if (sysChoice == 'Rock') {
            console.log('You Win !!!');
            msg.innerText = 'You Win Congratulations!!!';
            userScore++;
            console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);
            msg.style.color = 'rgba(0, 52, 2, 0.8)';

            userScoreBoard.innerText = userScore;
        }
        else {
            console.log('You Lose. Try Again.');
            msg.innerText = 'You lost the game.Try Again.';
            systemScore++;
            console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);
            msg.style.color = 'rgba(181, 2, 2, 0.8)';


            systemScoreBoard.innerText = systemScore;
        }
    }

    /*if(userChoice==='Scissor')*/
    else {
        if (sysChoice == 'Rock') {
            console.log('You Lose. Try Again.');
            msg.innerText = 'You lost the game.Try Again.';
            systemScore++;
            console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);
            msg.style.color = 'rgba(181, 2, 2, 0.8)';


            systemScoreBoard.innerText = systemScore;
        }
        else {
            console.log('You Win !!!!');
            msg.innerText = 'You Win Congratulations!!!';
            userScore++;
            console.log(`System Score : ${systemScore} and Your Score : ${userScore}`);
            msg.style.color = 'rgba(0, 52, 2, 0.8)';

            userScoreBoard.innerText = userScore;

        }
    }
};


choices.forEach((choices) => {
    //console.log(choices);

    let userChoice = choices.getAttribute('id'); // will return the id of the icon which is clicked

    choices.addEventListener('click', () => {

        // as we have user choice we need to start the game
        startGame(userChoice);



    });

});

