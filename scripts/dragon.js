class Dragon extends Component {
    constructor(game) {
        super(game);
        this.canvas = undefined;
        this.ctx = undefined;
        this.x = 1024;
        this.y = 310;
        this.width = 60;
        this.height = 40;
        this.img = new Image();
        this.img.src = "img/dragon/dragon_flying.png";
        this.speed = 3;
    }

    drawComponent() {
        let daCtx = this.game.ctx;
        daCtx.drawImage(
            this.img,
            this.x,
            this.y, 
            this.width * 2, 
            this.height * 2);
    }

    move() {
        if (Math.floor(Math.random() * 6) % 3 === 0) {
            this.x -= this.speed;
        }
    }
}