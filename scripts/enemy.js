class Enemy {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.x = 728;
        this.y = 400;
        this.width = 75;
        this.height = 125;
        this.img = new Image();
        this.img.src = "img/goblin/goblin_idle.png";
    }

    draw() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        console.log("drawing obstacle ---->>>>> ", this.img, this.img.src);
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    move() {
        if (Math.floor(Math.random() * 18) % 3 === 0) {
            console.log("moving ---- ", this.y, this.x);
            this.x -= 4;
        }
    }
}