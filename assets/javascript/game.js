$(document).ready(function () {

    // process for game loop
    var winCount = 0; // counter for game wins
    $("#winScore").text("Wins: " + winCount);
    var lossCount = 0; // counter for game losses
    $("#loseScore").text("Losses: " + lossCount);
    var userScore = 0; // counter for user score
    // creates game score, a random number between 19-120
    var gameScore = Math.floor(Math.random() * 120) + 19;
    // creates game score, a random number between 19-120
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    // creates crystal 2 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    // creates crystal 3 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    // creates crystal 4 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    $("#gameScore").text("Game Score: " + gameScore);
    $("#userScore").text("User Score: " + userScore);


    // resets game values
    function resetGame() {
        userScore = 0;
        // creates game score, random number between 19-120
        gameScore = Math.floor(Math.random() * 102) + 19;
        // creates crystal 1 value, random number between 1-12
        crystalOne = Math.floor(Math.random() * 12) + 1;
        // creates crystal 2 value, random number between 1-12
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        // creates crystal 3 value, random number between 1-12
        crystalThree = Math.floor(Math.random() * 12) + 1;
        // creates crystal 4 value, random number between 1-12
        crystalFour = Math.floor(Math.random() * 12) + 1;
        $("#gameScore").text("Game Score: " + gameScore);
        $("#userScore").text("User Score: " + userScore);


        // creates function for game win
        function winGame() {
            alert("You win! Play again!");
            winCount = winCount + 1;
            $("#winScore").text("Wins: " + winCount);
            resetGame();
        }

        // creates function for game loss
        function loseGame() {
            alert("You lose! Try again!");
            lossCount = lossCount + 1;
            $("#loseScore").text("Losses: " + lossCount);
            resetGame();
        }

        // creates on click function for crystalOne
        $("#crystalOne").click(function () {
            userScore = userScore + crystalOne; 
            $("#userScore").text("User Score: " + userScore);
            if (userScore === gameScore) {
                winGame();
            } else if (userScore > gameScore) {
                loseGame();
            }
        });

        // creates on click function for crystalTwo
        $("#crystalTwo").click(function () {
            userScore = userScore + crystalTwo; 

            $("#userScore").text("User Score: " + userScore);
            if (userScore === gameScore) {
                winGame();
            } else if (userScore > gameScore) {
                loseGame();
            }
        });

        // creates on click function for crystalThree
        $("#crystalThree").click(function () {
            userScore = userScore + crystalThree; 

            $("#userScore").text("User Score: " + userScore);
            if (userScore === gameScore) {
                winGame();
            } else if (userScore > gameScore) {
                loseGame();
            }
        });

        // creates on click function for crystalFour
        $("#crystalFour").click(function () {
            userScore = userScore + crystalFour; 

            $("#userScore").text("User Score: " + userScore);
            if (userScore === gameScore) {
                winGame();
            } else if (userScore > gameScore) {
                loseGame();
            }
        });

    });