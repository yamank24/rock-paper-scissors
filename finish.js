        let score = JSON.parse(localStorage.getItem('score')) || {
            Wins : 0,
            Losses : 0,
            Ties : 0
            } ;
            

            updateScoreElement();        
            
        function playGame(playerMove){
        const computerMove=pickComputerMove();
            
            let result = '';
            if(playerMove === 'scissors'){
                        if(computerMove === 'rock'){
                result = 'You Loose.';
            }else if(computerMove === 'paper'){
                result = 'You Win.';
            }else if(computerMove === 'scissors'){
                result = 'Tie.';
            }  
            }
            else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                result = 'You Win.';
            }else if(computerMove === 'paper'){
                result = 'Tie.';
            }else if(computerMove === 'scissors'){
                result = 'You Loose.';
            }  

            }else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                result = 'Tie.';
            }else if(computerMove === 'paper'){
                result = 'You Loose.';
            }else if(computerMove === 'scissors'){
                result = 'You Win.';
            }  
            }
            if(result === 'You Win.'){
                score.Wins +=1;
            }else if(result === 'You Loose.'){
                score.Losses +=1;
            }else if(result === 'Tie.'){
                score.Ties +=1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            
            updateScoreElement();   
            
            document.querySelector('.JS-result')
            .innerHTML = ` ${result}  `;

            document.querySelector('.JS-moves')
            .innerHTML = ` You
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        Computer  `;


        }

        function updateScoreElement(){
            document.querySelector('.JS-score')
            .innerHTML = ` Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}  `;
        }

        function pickComputerMove(){
            const randomNumber = Math.random();

            let computerMove='';
            
        if(randomNumber >=0 && randomNumber < 1 / 3 ){
        computerMove = 'rock';
        }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3 ){
        computerMove = 'paper';
        }else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
        }

        return computerMove;
        }

