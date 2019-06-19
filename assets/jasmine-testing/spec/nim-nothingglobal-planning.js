//Ensure all variables don't have global scope.
// Use an anonymous function so it is not available on global scope
// Immediately invoked function expression.
// Functions will not be available outside this function.
//Access the functions by using nimgame.functionname

var nimgame = (function() { 

//PRIVATE --- everything defined here will not be available outside the function



// end of PRIVATE ---


return { // --- Accessible --- everything defined here will be accessible from outside the function.
            // Accessible because they get returned immediately into the nimgame variable.


// ----------------- Functions to access DOM  ----------------- 

// returnAScore Function to take a variable and place it on the DOM


// End of returnAScore


// ----------------- Functions to run when Game Starts  ----------------- 

// -*- showCounters Show all counters

// -*- end of showCounters

// -*- initialiseVars Function to reset variables at start of game


// -*- End of initialiseVars


// -*- initialiseGame Runs the above functions

// -*- End of initialiseGame


// ----------------- Functions to run when a Counter is clicked  ----------------- 

// -*- hideCounter Make Counter hidden

// -*- End of hideCounter



// -*- increaseCountersTaken Function to increase number of counters taken in this turn


// -*- End of increaseCountersTaken


// -*- decreaseOverallCounters Function to decrease number of overall counters


// -*- End of decreaseOverallCounters


// -*- decideToPassTurn Pass turn to other player after three counters taken


// -*- End of decideToPassTurn

// -*- checkForWin


// -*- End of checkForWin

// -*- counterClicked Run the above functions when a counter has been clicked


// ----------------- Functions to run when a the Pass Button has been clicked  ----------------- 

// -*- checkPassAllowed Check if passing play to other player is allowed, and if so, pass play

// -*- end of checkPassAllowed

}

}()); // Execute the anonymous function immediately