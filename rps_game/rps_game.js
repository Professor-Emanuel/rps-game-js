const game = () =>{
    let startingPlayerScore = 0;
    let startingComputerScore = 0;

    // FUNCTION that will start the GAME
    const startGame = ()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    //PLAY the match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                //this refers to each hand
                this.style.animation = '';
            });
        });

        //NEED TO GET COMPUTER OPTIONS
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach( (option)=> {
            //add on each button and event listener (each option is a button)
            option.addEventListener('click', function(){

            //COMPUTER CHOICE
            const computerNumber = Math.floor(Math.random() * 3); /* Math.random() generates a number between 0 and 1 */
            const computerChoice = computerOptions[computerNumber];

            // delay 2000ms calling compareHands and updating images
            // to coincide with the imediate ANIMATIONS done after 
            setTimeout( ()=>{
                //Call compareHands()
                compareHands(this.textContent, computerChoice);

                //Update Images
                playerHand.src = `../images/${this.textContent}.png`;
                computerHand.src = `../images/${computerChoice}.png`;
            }, 2000);

            //ANIMATION
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            });
        });   
    };

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = startingPlayerScore;
        computerScore.textContent = startingComputerScore;
    }
    
    //Comparison Function
    const compareHands = (playerChoice, computerChoice)=>{

        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = "It's a TIE";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                startingPlayerScore++;
                winner.textContent = 'Player WON';
                updateScore();
                return;
            }else{
                startingComputerScore++;
                winner.textContent = 'Computer WON';
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                startingPlayerScore++;
                winner.textContent = 'Player WON';
                updateScore();
                return;
            }else{
                startingComputerScore++;
                winner.textContent = 'Computer WON';
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                startingPlayerScore++;
                winner.textContent = 'Player WON';
                updateScore();
                return;
            }else{
                startingComputerScore++;
                winner.textContent = 'Computer WON';
                updateScore();
                return;
            }
        }
    }


    //CALL all inner functions
    startGame();
    playMatch();
};

//START the game, call game function
game();




