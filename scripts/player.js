class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.onGround = true;
        this.velocityX = 4.0;
        this.velocityY = 0.0;
        this.gravity = 0.25;
    }

    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [32, 37, 39];
            let jumpStart = () => {
                if (this.onGround && this.y >= 250) {
                    this.y = -10.0;
                    this.onGround = false;
                }
            }
            let jumpEnd = () => {
                if (this.velocityY < -3.0) {
                    this.velocityY = -3.0;
                }
            }
            let jumpFunction = () => {
                this.velocityY += this.gravity;
                if (this.x < 300) {
                    this.x += this.velocityX;
                }
                this.y += this.velocityY;
                if (this.y >= 400) {
                    this.y = 400;
                    this.velocityY = 0.0;
                    this.onGround = true;
                }
            }
            let jump = () => {
                jumpStart();
                jumpFunction();
                jumpEnd();
                window.setTimeout(jump, 1000 / 45);
            }
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 32:
                        jump();
                        break;
                    case 39:
                        if (this.x < 300) {
                            this.x += 15;
                        }
                        break;
                    case 37:
                        this.x -= 15;
                        break;
                }
            }            
        }
    }

    crashCollision(ele) {
        if ((this.x - 10 < ele.x + ele.width &&
            this.x + this.width > ele.x &&
            this.y + 10 < ele.y + ele.height &&
            this.y + this.height > ele.y)) {
                setTimeout(() => alert("crash"), 5);
                window.location.reload();
            }
    }
}




