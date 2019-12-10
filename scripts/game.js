class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Player(this, 50, 400, 75, 125);
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
        this.speed = 3;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createEnemy();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        this.startScore();
        this.hero.move();            
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.startScore();
            if (this.hero.x >= 250) {
                this.scrollBackground();
            } else {
                return;
            }
            for (let i = 0; i < this.enemy.length; i++) {            
                if (this.enemy[i].x >= 0) {
                    this.enemy[i].move();
                    this.enemy[i].draw();
                    this.hero.crashCollision(this.enemy[i]);
                } else {
                    this.enemy.splice();
                }
            }
        }, 1000 / 60);
    }

    drawBackground() {
        this.backgroundImg1.src = "/img/background.png";
        this.backgroundImg2.src = "/img/background.png";
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
        this.score += Math.floor(this.scrollVal / 100);
        this.isGameFinished();        
    }            
    
    drawMainCharacters() {
        this.hero.drawComponent("/img/hero/hero_idle.png");
    }

    createEnemy() {
        console.log("creating enemy >>>>> ", this.enemy);
        if (Math.floor(Math.random() * 15) % 5 === 0) {
            this.enemy.push(new Enemy());
        }
        setTimeout(() => {
            this.createEnemy();
        }, 3000);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    startScore() {
        let gameFont = "Press Start 2P";
        this.ctx.font = `18px "${gameFont}"`;
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Score: " + this.score, 800, 50);
    }

    isGameFinished() {
        if (this.score >= 100000) {
        this.clear();
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
        return true;
    }
}