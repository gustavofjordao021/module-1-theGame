window.onload = function() {
    document.getElementById("btn").onclick = function() {
        startGame();
    };
  
    function startGame() {
        const myGame = new Game();
        myGame.init();
    }
  };