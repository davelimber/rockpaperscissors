function game(playerChoice) {

    var cc = computerChoice();
    var pc = playerChoice;

// User wins
    if ((pc == 'rock') && (cc == 'scissors')) {
        var winner = '<i>User Wins!'+ '<br> Computer was ' + cc + '</i>';
        
        return winner;
    } else if ((pc == 'paper') && (cc == 'rock')) {
       var winner = '<i>User Wins!'+ '<br> Computer was ' + cc + '</i>';
        ''
        return winner;
    } else if ((pc == 'scissors') && (cc == 'paper')) {
       var winner = '<i>User Wins!'+ '<br> Computer was ' + cc + '</i>';
        
        return winner;
// Computer wins
    } else if ((pc == 'rock') && (cc == 'paper')) {
       var winner = '<i>Computer Wins!'+ '<br> Computer was ' + cc + '</i>';
        
        return winner;
    } else if ((pc == 'paper') && (cc == 'scissors')) {
       var winner = '<i>Computer Wins!'+ '<br> Computer was ' + cc + '</i>';
        
        
        return winner;
    } else if ((pc == 'scissors') && (cc == 'rock')) {
       var winner = '<i>Computer Wins!'+ '<br> Computer was ' + cc + '</i>';
    
        
        return winner;
// Tie 
    } else if (pc == cc) {
       var winner = '<i>Tie!'+ '<br> Computer was ' + cc + '</i>';
    
        
        return winner;
    } else {
        var winner = 'input rock, paper, or scissors';
        
        return winner;
    }
};

// Computer's selection
function computerChoice() {
    var cRN = Math.random();

    if (cRN < .33) {
        return 'rock';

    } else if ((cRN >= .33) && (cRN <= .66)) {
        return 'scissors';

    } else if (cRN > .66) {
        return 'paper';

    }
};

function drawresults(result) {
    document.getElementById('result').innerHTML=result;
};

function play(choice) {
    (drawresults(game(choice)));
}

// var cRN = Math.random();

// if (cRN < .33) {
//    cc = 'rock';

// } else if ((cRN >= .33) && (cRN <= .66)) {
//     cc = 'scissors';

// } else if (cRN > .66) {
//     cc = 'paper';

// } 
