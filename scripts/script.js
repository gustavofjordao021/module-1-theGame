window.onload = function() {
    document.getElementById("btn").onclick = function() { 
        document.getElementById("game-board").innerHTML = '';
        document.getElementById("game-board").innerHTML = 
        '<div><canvas id="canvas" width="1024" height="576"></canvas></div><button id="btn2">RESTART GAME</button>';
        startGame();
    };
  
    let startGame = () => {
        const myGame = new Game();
        myGame.init();
    }

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == 'btn2') {
            e.preventDefault;
            document.getElementById("canvas").classList.remove("canvas");
            document.getElementById("canvas").classList.add("canvas");
            const newGame = new Game ();
            newGame.gameRestart();
         }
     });
  };