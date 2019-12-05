window.onload = function() {
    document.getElementById("btn").onclick = function() {
        let introDiv = document.getElementById("intro-page");
        introDiv.innerHTML = "";
        introDiv.innerHTML = 
        '<div><canvas id="canvas" width="1024" height="576"></canvas><button id="btn">START GAME</button>   </div>';
        startGame();
    };
  
    function startGame() {
        const myGame = new Game();
        myGame.init();
    }
  };