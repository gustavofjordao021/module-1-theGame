class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.onGround = true;
        this.velocityY = 0.0;
        this.velocityX = 5.0;
        this.gravity = 0.6;
        this.goUp = false;
        this.isMovingRight = false; 
        this.isMovingLeft = false;
        this.isKeyUp = true;
        this.isKeyDown = false;
        this.keysPressed = [];
        }

    move = () => {
        let intervalId;
        document.onkeydown = event => {
            const key = event.keyCode;
            if (this.keysPressed.length < 1) {
                this.keysPressed.push(event.keyCode);
            } else {
                this.keysPressed = [];
            }
            console.log(this.keysPressed);
            const possibleKeystrokes = [38, 37, 39];
            let jumpStart = () => {
                this.velocityY += this.gravity;
                if (!this.onGround && this.y >= 200) {
                    this.y -= 20 
                    this.y + this.velocityY;
                } else {
                    this.goUp = false;
                }
            }
            let jumpFunction = () => {
                this.velocityY += this.gravity;
                this.y += this.velocityY;  
                if (this.y >= 400) {
                    this.y = 400;
                    this.onGround = true;
                    clearInterval(intervalId)
                }
            }
            // let jumpFunctionRight = () => {
            //     this.velocityY += this.gravity;
            //     this.y += this.velocityY;  
            //     if (this.x < 300) {
            //         this.x += this.velocityX;
            //     }
            //     if (this.y >= 400) {
            //         this.y = 400;
            //         this.onGround = true;
            //         clearInterval(intervalId)
            //     }
            // }
            // let jumpFunctionLeft = () => {
            //     this.velocityY += this.gravity;
            //     this.y += this.velocityY;  
            //     if (this.x < 300) {
            //         this.x -= this.velocityX;
            //     }                
            //     if (this.y >= 400) {
            //         this.y = 400;
            //         this.onGround = true;
            //         clearInterval(intervalId)
            //     }
            // }
            let jumpEnd = () => {
                if (this.velocityY < 1.5) {
                    this.velocityY = 1.5;
                    this.y += this.velocityY; 
                }   
            }
            let jump = () => {
                this.onGround = false;
                intervalId = setInterval(() => {
                    jumpStart();
                    jumpFunction();
                    jumpEnd();  
                }, 1000 / 30);    
                this.velocityY = 0.0;
            }
            if (possibleKeystrokes.includes(key)) {
                switch (key) {
                    case 38:
                        this.goUp = true;
                        this.isMovingRight = false;
                        this.isMovingLeft = false;
                        jump();
                        break;
                    case 39:
                        if (this.x < 1004) { 
                            this.x += 20;                        
                        }
                        this.scale = (this.scale + 1) % 6; 
                        this.isMovingRight = true;
                        this.isMovingLeft = false;
                        break;
                    case 37:
                        if (this.x >= 20) { 
                            this.x -= 20;                        
                        }
                        this.scale = (this.scale + 1) % 6;
                        this.isMovingRight = false;
                        this.isMovingLeft = true;
                        break;
                    default:
                        this.isMovingRight = false;
                        this.isMovingLeft = false;
                        this.goUp = false;
                        this.isKeyDown = false;
                        this.isKeyUp = true;
                }
            }            
        }
    }

    crashCollision(ele) {
        if ((this.x - 20 < ele.x + ele.width &&
            this.x + this.width > ele.x &&
            this.y - 20 < ele.y + ele.height &&
            this.y + this.height > ele.y)) {
                return true;
        }
    }
}