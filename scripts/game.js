class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Player(this, 50, 400, 75, 125);
        this.enemy = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 1024;
        this.height = 576;
        this.imgWidth = 1024;
        this.imgHeight = 576;
        this.scrollVal = 0;
        this.speed = 1;
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
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.startScore();
            this.hero.move();
            this.scrollBackground();
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
        this.backgroundImg.src = "/img/background.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height);
    }

    scrollBackground = () => {
        let render = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);        
            this.scrollVal += this.speed;                   
            this.ctx.drawImage(
                    this.backgroundImg, this.width - this.scrollVal, 0, this.imgWidth, this.imgHeight
            );
            setTimeout(function() {
                render();
            }, 1000);
        }    
        render();                
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
        this.ctx.fillText("Score: " + this.score, 850, 50);
    }
}  