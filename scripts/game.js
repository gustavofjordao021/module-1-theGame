class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Player(this, 50, 400, 30, 120);
        this.enemy = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg1 = new Image();
        this.backgroundImg2 = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 1024;
        this.height = 576;
        this.imgWidth = 1024;
        this.imgHeight = 576;
        this.scrollVal = 0;
        this.speed = 0;
        this.intervalArr = [];
        this.enemyArr = [];
    }

    init = () => {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createEnemy();
    }

    start = () => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.startScore();
            this.hero.move();                        
            let intervalID = setInterval(() => {
            if (!this.isGameFinished()) {
                this.intervalArr.push(intervalID);
                let i = 0;
                this.clear();
                this.drawBackground();
                this.drawMainCharacters();
                this.startScore();
                this.scrollBackground();
                if (this.hero.x >= 250) {
                    this.speed = 3;
                } else {
                    this.speed = 0;
                }
                for (i = 0; i < this.enemy.length; i++) {            
                    if (this.enemy[i].x >= 0) {
                        this.enemy[i].move();
                        this.enemy[i].drawComponent();
                        this.hero.crashCollision(this.enemy[i]);                           
                        if (this.hero.crashCollision(this.enemy[i])) {
                            this.drawBackground();
                            this.drawMainCharacters();
                            this.enemy[i].drawComponent();
                            this.startScore();
                            clearInterval(intervalID);
                            this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                            this.ctx.beginPath();
                            this.ctx.fillRect(0, 0, this.width, this.height);
                            this.ctx.fill();
                            let gameFont = "Press Start 2P";
                            this.ctx.font = `36px "${gameFont}"`;
                            this.ctx.textAlign = "center";
                            this.ctx.fillStyle = "white";
                            this.ctx.fillText(
                                "You died!",
                                this.canvas.width / 2,
                                this.canvas.height / 2
                                );
                        }
                    } else {
                        this.enemy.splice();
                    }
                }
            } else {
                this.drawBackground();
                this.drawMainCharacters();
                this.startScore();
                clearInterval(intervalID);
                this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                this.ctx.beginPath();
                this.ctx.fillRect(0, 0, this.width, this.height);
                this.ctx.fill();
                let gameFont = "Press Start 2P";
                this.ctx.font = `36px "${gameFont}"`;
                this.ctx.textAlign = "center";
                this.ctx.fillStyle = "white";
                this.ctx.fillText(
                    "You win!",
                    this.canvas.width / 2,
                    this.canvas.height / 2
                    );
            }
        }, 1000 / 60);
    }
    
    drawBackground = () => {
        this.backgroundImg1.src = "img/background.png";
        this.backgroundImg2.src = "img/background.png";
        this.ctx.drawImage(
            this.backgroundImg1,
            this.x,
            this.y,
            this.width,
            this.height);
    }

    scrollBackground = () => {
        let render = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);
            if (this.scrollVal + 224 >= this.width){
                this.scrollVal = 0;
            }        
            this.scrollVal += this.speed;
            this.ctx.drawImage(
                this.backgroundImg2, 800 - this.scrollVal, 0, this.imgWidth, this.imgHeight
            );                   
            this.ctx.drawImage(
                    this.backgroundImg1, 0 - this.scrollVal, 0, this.imgWidth, this.imgHeight
            );
        }
        render();
        this.drawMainCharacters();
        this.startScore();
        this.hero.move();
        if (this.speed > 0) { 
            this.score += Math.floor(this.scrollVal / 200);
        }
        this.isGameFinished();        
    }            
    
    drawMainCharacters = () => {
        this.hero.drawComponent("img/hero/hero_idle.png");
    }

    createEnemy = () => {
        console.log("creating enemy >>>>> ", this.enemy);
        if (this.isGameFinished) {
            if (Math.random() > 0.35) {
                this.enemy.push(new Enemy(this));
            }
            let enemyIntervalID = setTimeout(() => {
                this.createEnemy();
            }, 3000);
            this.enemyArr.push(enemyIntervalID);
        } else {
            this.enemy = [];
        }
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    startScore = () => {
        let gameFont = "Press Start 2P";
        this.ctx.font = `18px "${gameFont}"`;
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Score: " + this.score, 800, 50);
    }

    isGameFinished = () => {
        if (this.score >= 10000) {
            return true;
        }
    }

    gameRestart() {
        clearInterval(this.intervalArr[0]);
        clearInterval(this.enemyArr[0]);
        this.intervalArr = [];
        this.enemyArr = [];
        console.log(this.enemy);
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Player(this, 50, 400, 30, 120);
        this.background = undefined;
        this.score = 0;
        this.backgroundImg1 = new Image();
        this.backgroundImg2 = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 1024;
        this.height = 576;
        this.imgWidth = 1024;
        this.imgHeight = 576;
        this.scrollVal = 0;
        this.speed = 0;
        this.init();    
    }
}