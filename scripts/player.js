class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.onGround = true;
        this.velocityX = 7.5;
        this.velocityY = 0.0;
        this.gravity = 1.5;
        this.goUp = false;
        this.isMovingRight = false; 
        this.isMovingLeft = false;
        }

    move = () => {
        let intervalId;
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [32, 37, 39];
            let jumpStart = () => {
                this.velocityY += this.gravity;
                if (!this.onGround && this.y >= 250) {
                    this.y -= 20 
                    this.y + this.velocityY;
                    if (!this.onGround) {
                        this.x += this.velocityX;   
                    }
                } else {
                    this.goUp = false;
                }
            }
            let jumpEnd = () => {
                if (this.velocityY < 2.0) {
                    this.velocityY = 2.0;
                    this.y += this.velocityY; 
                }
            }
            let jumpFunction = () => {
                this.velocityY += this.gravity;
                if (!this.onGround) {
                    this.x += this.velocityX;   
                }
                if (!this.goUp) {
                    this.y += this.velocityY;  
                }
                if (this.y >= 400) {
                    this.y = 400;
                    this.onGround = true;
                    clearInterval(intervalId)
                }
            }
            let jump = () => {
                this.onGround = false;
                intervalId = setInterval(() => {
                    if (this.goUp) {
                        jumpStart();
                    } else {
                        jumpFunction();
                    }
                    jumpEnd();  
                }, 1000 / 30);    
                this.velocityX = 7.5;
                this.velocityY = 0.0;
            }
            //  
                if (possibleKeystrokes.includes(key)) {
                switch (key) {
                    case 32:
                        this.goUp = true;
                        this.isMovingRight = false;
                        this.isMovingLeft = false;
                        jump();
                        break;
                    case 39:
                        this.x += 15;
                        this.scale = (this.scale + 1) % 6; 
                        this.isMovingRight = true;
                        this.isMovingLeft = false;
                        break;
                    case 37:
                        this.x -= 15;
                        this.scale = (this.scale + 1) % 6;
                        this.isMovingRight = false;
                        this.isMovingLeft = true;
                        break;
                    default:
                        this.isMovingRight = false;
                        this.isMovingLeft = false;
                        this.goUp = false;
                }
            }            
        }
    }

    crashCollision(ele) {
        if ((this.x < ele.x + ele.width &&
            this.x + this.width > ele.x &&
            this.y < ele.y + ele.height &&
            this.y + this.height > ele.y)) {
                setTimeout(() => alert("crash"), 5);
                window.location.reload();
        }
    }
}

// move() {
//     let intervalId;
//     document.onkeydown = event => {
//         const key = event.keyCode;
//         const possibleKeystrokes = [32, 37, 39];
//         let jumpStart = () => {
//             this.velocityY += this.gravity;
//             if (!this.onGround && this.y >= 250) {
//                 this.y -= 25 
//                 this.y + this.velocityY;
//                 if (!this.onGround) {
//                     this.x += this.velocityX;   
//                 }
//             } else {
//                 this.goUp = false;
//             }
//         }
//         let jumpEnd = () => {
//             if (this.velocityY < 2.0) {
//                 this.velocityY = 2.0;
//                 this.y += this.velocityY; 
//             }
//         }
//         let jumpFunction = () => {
//             this.velocityY += this.gravity;
//             if (!this.onGround) {
//                 this.x += this.velocityX;   
//             }
//             if (!this.goUp) {
//                 this.y += this.velocityY;  
//             }
//             if (this.y >= 400) {
//                 this.y = 400;
//                 this.onGround = true;
//                 clearInterval(intervalId)
//             }
//         }
//         let jump = () => {
//             this.onGround = false;
//             intervalId = setInterval(() => {
//                 if (this.goUp) {
//                     jumpStart();
//                 } else {
//                     jumpFunction();
//                 }
//                 jumpEnd();  
//             }, 1000 / 30);    
//             this.velocityX = 10.0;
//             this.velocityY = 0.0;
//         }
//         event.preventDefault();
//             if (possibleKeystrokes.includes(key)) {
//             switch (key) {
//                 case 32:
//                     this.goUp = true;
//                     jump();
//                     break;
//                 case 39:
//                     this.x += 15;
//                     break;
//                 case 37:
//                     this.x -= 15;
//                     break;
//             }
//         }            
//     }
// }

// crashCollision(ele) {
//     if ((this.x - 10 < ele.x + ele.width &&
//         this.x + this.width > ele.x &&
//         this.y + 10 < ele.y + ele.height &&
//         this.y + this.height > ele.y)) {
//             setTimeout(() => alert("crash"), 5);
//             window.location.reload();
//     }
// }
// }