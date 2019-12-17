window.onload = function() {
    document.getElementById("btn").onclick = function() { 
        document.getElementById("game-board").innerHTML = '';
        document.getElementById("game-board").innerHTML = 
        '<div><canvas id="canvas" width="1024" height="576"></canvas></div>';
        startGame();
    };
  
    function startGame() {
        const myGame = new Game();
        myGame.init();
    }
  };