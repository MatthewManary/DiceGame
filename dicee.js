/*********************************
 * 
 * When page is refreshed P1 and P2 dice are shown at random
 * Player with higher numbered die wins
 * Use random number to select each die
 * Compare the two to find the winner
 * Display the dice
 * Announce the winner
 * 
 *********************************/

 /******************************
  * 
  * On page load call function to roll dice
  */

  /************ Main Function **************/

  function play() {   

    ///////// Get Score For Each Player ////////
    var playerOne = rollDice();
    var playerTwo = rollDice();

    ///////// Compare Scores to Prevent a Tie /////////
    if (playerOne === playerTwo) {
      playerOne = rollDice();
    }

    ///////// Display Winner on Page Top ///////////
    if (playerOne > playerTwo) {
      // set h1 to "Player 1 Wins"
      document.querySelector("h1").innerText = "Player 1 Wins!";
    }
    else {
      // set h1 to "Player 2 Wins"
      document.querySelector("h1").innerText = "Player 2 Wins!";
    }

    ////////// Display Dice on Page ///////////
    displayDicePlayerOne(playerOne);
    displayDicePlayerTwo(playerTwo);

  }

  /********** Function to Display Player 1 Dice ************/
  
  function displayDicePlayerOne(player) {

      switch (player) {
          case 1:
            document.querySelector(".img1").setAttribute("src", "images/dice1.png");
              break;
          case 2:
            document.querySelector(".img1").setAttribute("src", "images/dice2.png");
              break;
          case 3:
            document.querySelector(".img1").setAttribute("src", "images/dice3.png");
              break;
          case 4:
            document.querySelector(".img1").setAttribute("src", "images/dice4.png");
              break;
          case 5:
            document.querySelector(".img1").setAttribute("src", "images/dice5.png");
              break;
          case 6:
            document.querySelector(".img1").setAttribute("src", "images/dice6.png");
              break;
      }
  }

  /********** Function to Display Player 2 Dice ************/

  function displayDicePlayerTwo(player) {

    switch (player) {
        case 1:
          document.querySelector(".img2").setAttribute("src", "images/dice1.png");
            break;
        case 2:
          document.querySelector(".img2").setAttribute("src", "images/dice2.png");
            break;
        case 3:
          document.querySelector(".img2").setAttribute("src", "images/dice3.png");
            break;
        case 4:
          document.querySelector(".img2").setAttribute("src", "images/dice4.png");
            break;
        case 5:
          document.querySelector(".img2").setAttribute("src", "images/dice5.png");
            break;
        case 6:
          document.querySelector(".img2").setAttribute("src", "images/dice6.png");
            break;
    }
}

/****** Function to Display Dice For Either Player *******/

// function displayDice(player) {

//     if (player === playerOne) {
//         const imageSelector = ".img1";
//     }
//     else if (player === playerTwo) {
//         const imageSelector = ".img2";
//     }
      
//     switch (player) {
//         case 1:
//           document.querySelector(imageSelector).setAttribute("src", "images/dice1.png");
//             break;
//         case 2:
//           document.querySelector(imageSelector).setAttribute("src", "images/dice2.png");
//             break;
//         case 3:
//           document.querySelector(imageSelector).setAttribute("src", "images/dice3.png");
//             break;
//         case 4:
//           document.querySelector(imageSelector).setAttribute("src", "images/dice4.png");
//             break;
//         case 5:
//           document.querySelector(imageSelector).setAttribute("src", "images/dice5.png");
//             break;
//         case 6:
//           document.querySelector(imageSelector).setAttribute("src", "images/dice6.png");
//             break;
//     }
// }

  /******* Function to Roll the Dice For Each Player ******/

  function rollDice() {
      return Math.ceil(Math.random() * 6);
  }