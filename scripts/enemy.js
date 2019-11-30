class Enemy {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.x = Math.floor(Math.random() * 440 + 30);
        this.y = 380;
        this.width = 100;
        this.height = 150;
        this.img = new Image();
        this.img.src = "/img/goblin/goblin_idle.png";
    }

    draw() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        console.log("drawing obstacle ---->>>>> ", this.img, this.img.src);
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    move() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            console.log("moving ---- ", this.y, this.x);
            this.x += 3;
        }
    }
}