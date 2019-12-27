window.onload = function gameStart() {
    document.getElementById("btn").onclick = function() { 
        cleanCanvas();
        startGame();
    };
  
    let startGame = () => {
        const myGame = new Game();
        myGame.init();
    }

    let cleanCanvas = () => {
        document.getElementById("game-board").innerHTML = '';
        document.getElementById("game-board").innerHTML = 
        '<div><canvas id="canvas" width="1024" height="576"></canvas></div><button id="btn2">RESTART GAME</button><button id="btn3">BACK TO MENU</button>';
    }

    document.addEventListener('click', function(e) {
        if (e.target.id == '' || e.target.id == 'btn') {
            e.preventDefault;
            gameStart();
        } else if (e.target.id == '' || e.target.id == 'btn2') {
            e.preventDefault;
            cleanCanvas();
            startGame();
        } else if (e.target.id == '' || e.target.id == 'btn3') {
            e.preventDefault;
            document.getElementById("game-board").innerHTML = '<div id="game-board"><img id="game-logo" src="img/logo.png"><div id="intro-page"><h1>The IronTales</h1><h2>A hacking adventure</h2><p>Instructions:</p><img id="instructions" src="img/keyboardKeys.png"></div><button id="btn">START GAME</button></div>';
         }
     });
  };