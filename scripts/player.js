class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.goingDown = false;
        this.jump_y = this.y;
        this.jumpLimit = this.jump_y - 100;
    }

    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [32, 37, 39];
            let jump = () => {
                if (this.y >= this.jumpLimit && this.goingDown === false) {
                    setInterval(() => {
                        this.y -= 15;
                        if (this.y = this.jumpLimit) {
                            this.goingDown = true;
                            setInterval(() => {
                                this.y += 15;                        
                                if (this.y = this.jump_y) {
                                    this.goingDown = false;
                                    clearInterval();
                                }            
                            }, 1000);
                            clearInterval();
                        }      
                    }, 1000);                  
                }
            }
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 32:
                        jump();
                        break;
                    case 39:
                        this.x += 15;
                        break;
                    case 37:
                        this.x -= 15;
                        break;
                }
            }            
        }
    }
    crashCollision(ele) {
        if (
            (this.y + 5 < ele.y + ele.height &&
                this.x + 10 < ele.x + ele.width &&
                this.x + this.width - 10 > ele.x) ||
            (ele.y + ele.height > this.y &&
                ele.x < this.x + this.width &&
                this.x < elem.x + ele.width)
        ) {
            setTimeout(() => alert("crash"), 5);
            window.location.reload();
        }
    }
}