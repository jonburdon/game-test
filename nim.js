var nimstaken = 0; // Keep track of how many nims have been taken in this turn
var p1turn = true; // Keep track of whose turn it is
var nimsinplay = 21; // Keep track of overal number of nims

NimGame = function() {
 
//Display number of nims
document.getElementById("nimnumber").innerHTML = nimsinplay;

    // Hide Button

    // Increase number of counters taken

    nimstaken = nimstaken+1;
    document.getElementById("nimstaken").innerHTML = nimstaken;
    // Reduce overall Nims

    nimsinplay = nimsinplay-1;
    document.getElementById("nimnumber").innerHTML = nimsinplay;

    // Pass play to other player after three counters taken

    if (nimstaken === 3) {
        if (p1turn === true) {
            p1turn = false;
            document.getElementById("whoseturn").innerHTML = "Player 2s Turn";
            nimstaken = 0;
        }
        else {
            p1turn = true;
            document.getElementById("whoseturn").innerHTML = "Player 1s Turn";
            nimstaken = 0;
        }
        
    }

    // Check for win

    if (nimsinplay === 0) {
         // Declare the winner
         if (p1turn === true) {
            document.getElementById("nimwinner").innerHTML = "Player One Wins";
         }
         else {
            document.getElementById("nimwinner").innerHTML = "Player Two Wins";
         }
         
    }

   

};

PassTurn = function() {
    // Check if at least one nim has been taken

    // Allow play to be passed to other player
}