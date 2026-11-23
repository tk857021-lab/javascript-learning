
      let score = JSON.parse(localStorage.getItem("score"))
      ||  {
          wins: 0,
          losses: 0,
          ties: 0,
        };
        
        updateScoreElement();
       /*
      if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0,
        };
      }*/

      function playGame(playerMove) {
        const computerMove = PickComputerMove();
        let result = "";

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "you loss";
          } else if (computerMove === "paper") {
            result = "you win";
          } else if (computerMove === "scissors") {
            result = "tie";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "tie";
          } else if (computerMove === "paper") {
            result = "you loss";
          } else if (computerMove === "scissors") {
            result = "you win";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "you win";
          } else if (computerMove === "paper") {
            result = "you tie";
          } else if (computerMove === "scissors") {
            result = "you loss";
          }
        }

        if (result === "you win") {
          score.wins += 1;
        } else if (result === "you loss") {
          score.losses += 1;
        } else if (result === "you tie") {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        updateScoreElement();
        
         document.querySelector('.js-result')
        .innerHTML = result;

        
        document.querySelector('.js-pick')
        .innerHTML = `You picked 
           <img src="image/${playerMove}-emoji.png" class="move-icons"> 
           <img src="image/${computerMove}-emoji.png" class="move-icons">
           Computer picked`;

        alert(
          `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
          wins: ${score.wins} losses: ${score.losses} ties: ${score.ties} `,
        );
      }

      function updateScoreElement(){
        
        document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
      };
      
      

      function PickComputerMove() {
        const randomNum = Math.random();

        let computerMove = "";

        if (randomNum >= 0 && randomNum < 1 / 3) {
          computerMove = "rock";
        } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
          computerMove = "paper";
        } else if (randomNum >= 2 / 3 && randomNum < 1) {
          computerMove = "scissors";
        }

        return computerMove;
      }
