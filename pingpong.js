pingPongGame = function(pingpong) {
    if (typeof pingpong == 'string') {
        if (pingpong === "Pong") {
            document.getElementById("ppresult").innerHTML = "Ping";
        }
        else if (pingpong === "Ping") {
            document.getElementById("ppresult").innerHTML = "Pong";
        }
        else {
            document.getElementById("ppresult").innerHTML = "Please enter Ping, Pong or a number 0-10.";
        }
    }
    else if (pingpong>10) {
        return "Please enter Ping, Pong or a number 0-10.";
    }
    else if (pingpong<0) {
        return "Please enter Ping, Pong or a number 0-10.";
    }
    else if (pingpong+(10-pingpong) === 10) {
        var ppres = 10-pingpong;
        document.getElementById("ppresult").innerHTML = ppres;
    }

    else {
        return "Please enter Ping, Pong or a number 0-10.";
    }
};