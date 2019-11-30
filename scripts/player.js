class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
    }

    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [32, 37, 39];
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 39:
                        this.x += 15;
                        break;
                    case 37:
                        this.x -= 15;
                        break;
                }
            }
        };
    }
}

// crashCollision(ele) {
    //     if (
    //         (this.y + 10 < ele.y + ele.height &&
    //             this.x + 15 < ele.x + ele.width &&
    //             this.x + this.width - 15 > ele.x) ||
    //         (ele.y + ele.height > this.y &&
    //             ele.x < this.x + this.width &&
    //             this.x < elem.x + ele.width)
    //     ) {
    //         setTimeout(() => alert("crash"), 5);
    //         window.location.reload();
    //     }
    // }
