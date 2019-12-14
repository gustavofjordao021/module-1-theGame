class Enemy extends Component {
    constructor(game) {
        super(game);
        this.canvas = undefined;
        this.ctx = undefined;
        this.x = 728;
        this.y = 442;
        this.width = 30;
        this.height = 40;
        this.img = new Image();
        this.img.src = "img/goblin/goblin_spritesheet.png";
    }

    drawComponent() {
        let daCtx = this.game.ctx;
        daCtx.drawImage(
            this.img, 
            26.75 * this.scale, 
            0, 
            32, 
            64,
            this.x,
            this.y, 
            this.width * 2, 
            this.height * 2);
    }

    move() {
        if (Math.floor(Math.random() * 6) % 3 === 0) {
            console.log("moving ---- ", this.y, this.x);
            this.x -= 7.5;
            this.scale = (this.scale + 1) % 7;
        }
    }
}