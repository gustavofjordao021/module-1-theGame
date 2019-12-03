class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Player(this, 50, 380, 100, 150);
        this.enemy = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 1024;
        this.height = 576;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createEnemy();
        // this.createObstacles();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.hero.move();
            for (let i = 0; i < this.enemy.length; i++) {            
                if (this.enemy[i].x >= 0) {
                    this.enemy[i].move();
                    this.enemy[i].draw();
                } else {
                    this.enemy.splice();
                }
            }
        }, 1000 / 60);            
                // this.hero.crashCollision(this.obstacle[i]);
                // if (this.enemy[i].y > 800) {
                //     this.enemy.splice(i, 1);
                // }}
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
    
    drawMainCharacters() {
        this.hero.drawComponent("/img/hero/hero_idle.png");
    }

    createEnemy() {
        console.log("creating enemy >>>>> ", this.enemy);
        if (Math.floor(Math.random() * 25) % 5 === 0) {
            this.enemy.push(new Enemy());
        }
        setTimeout(() => {
        this.createEnemy();
        }, 3000);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}







