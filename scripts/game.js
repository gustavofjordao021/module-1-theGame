class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Player(this, 200, 450, 100, 150);
        this.obstacle = [];
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
        // this.createObstacles();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        // setInterval(() => {
        //     this.clear();
        //     this.drawBackground();
        //     this.drawMainCharacters();
        //     this.hero.move();
        //     for (let i = 0; i < this.obstacle.length; obstacle++) {
        //         this.obstacle[i].move();
        //         this.obstacle[i].draw();
        //         this.car.crashCollision(this.obstacle[i]);
        //         if (this.obstacle[i].y > 800) {
        //             this.obstacle.splice(i, 1);
        //         }
        //     }
        // }, 1000 / 60);
    }

    drawBackground() {
        this.backgroundImg.src = "/img/background.png";
        let imgHeight = 0;
        let scrollSpeed = 10;
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height);
    }
    
    drawMainCharacters() {
        this.hero.drawComponent("/img/hero/idle.png");
    }
}



//     createObstacles() {
//         console.log("creating obstacle >>>>> ", this.obstacle);
//         if (Math.floor(Math.random() * 25) % 3 === 0) {
//             this.obstacle.push(new Obstacle());
//         }

//         setTimeout(() => {
//             this.createObstacles();
//         }, 3000);
//     }

//     // clear() {
//     //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     // }

