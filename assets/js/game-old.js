//Ensure all variables don't have global scope.
// Use an anonymous function so it is not available on global scope
// Immediately invoked function expression.
// Functions will not be available outside this function.
//Access the functions by using nimgame.functionname

var nimGame = (function () {

    //PRIVATE --- everything defined here will not be available outside the function

    // end of PRIVATE ---

    return { // --- Accessible --- everything defined here will be accessible from outside the function.
        // Accessible because they get returned immediately into the nimgame variable.


        // ----------------- Functions to run when a Counter is clicked  ----------------- 


        // -*- increaseCountersTaken Function to increase number of counters taken in this turn

        var nimstaken = 0;

        easyNimGame = function () {
            console.log(nimstaken);
            nimstaken++;
        };

        // -*- End of increaseCountersTaken

    }

}()); // Execute the anonymous function immediately


//OLD VERSION//

// var nimstaken = 0;

// easyNimGame = function() {
//     // Increase number of counters taken
//     nimstaken ++;
//     document.getElementById("nimstaken").innerHTML = nimstaken;

//     };