class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.onGround = true;
        this.velocityX = 4.0;
        this.velocityY = 0.0;
        this.gravity = 0.5;
        this.goUp = false;
        }

    move() {
        let intervalId;
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [32, 37, 39];
            let jumpStart = () => {
                console.log("test", this.y);
                this.velocityY += this.gravity;
                // this.goUp = true;
                if (!this.onGround && this.y >= 250) {
                    this.y -= 10 
                    this.y + this.velocityY;
                } else {
                    this.goUp = false;
                }
            }
            let jumpEnd = () => {
                if (this.velocityY < 3.0) {
                    this.velocityY = 3.0;
                    this.y += this.velocityY; 
                }
            }
            let jumpFunction = () => {
                this.velocityY += this.gravity;
                if (this.x <= 300 && !this.onGround) {
                    console.log("this.x, this.y:", this.x, this.y);
                    this.x += this.velocityX;   
                }
                if (!this.goUp) {
                    console.log("2")
                    this.y += this.velocityY;  
                }
                if (this.y >= 400) {
                    this.y = 400;
                    console.log("3")
                    this.onGround = true;
                    clearInterval(intervalId)
                }
                console.log("somefinudsifbsdufbsildbufsd", this.velocityX);
            }
            let jump = () => {
                this.onGround = false;
                intervalId = setInterval(() => {
                    if(this.goUp) {
                        jumpStart();
                    } else {
                        jumpFunction();
                    }
                    
                    jumpEnd();  
                    
                    
                }, 200);    
                this.velocityX = 4.0;
                this.velocityY = 0.0;
            }
            event.preventDefault();
                if (possibleKeystrokes.includes(key)) {
                switch (key) {
                    case 32:
                        this.goUp = true;
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



// let jumpStart = () => {
//     this.onGround = false;
//     this.velocityY += this.gravity;
//     if (!this.onGround && this.y >= 250) {
//         this.y += -15 - this.velocityY;
//     }
// }
// let jumpEnd = () => {
//     if (this.velocityY < 3.0) {
//         this.velocityY = 3.0;
//     }
// }
// let jumpFunction = () => {
//     this.velocityY += this.gravity;
//     if (this.x < 300 && this.y < 400) {
//         this.x += this.velocityX;   
//     }
//     if (this.y <= 250) {
//         this.y += this.velocityY;   
//     }
//     // this.y += this.velocityY;
//     if (this.y >= 400) {
//         this.y = 400;
//         this.onGround = true;
//     }
// }
// let jump = () => {
//     this.intervalID = window.setInterval(() => {
//         jumpStart();
//         jumpFunction();                
//         jumpEnd();                
//     }, 1000 / 60);
// }