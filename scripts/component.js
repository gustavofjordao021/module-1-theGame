class Component {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.scale = 0;
    }
    
    drawComponent(imgSource) {
        let daCtx = this.game.ctx;
        this.img.src = imgSource;
        daCtx.drawImage(
            this.img, 
            32 * this.scale, 
            0, 
            32, 
            64,
            this.x,
            this.y, 
            this.width, 
            this.height);
    }
}