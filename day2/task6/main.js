const animate = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) { window.setTimeout(callback, 1000 / 60) };

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 600;
document.body.appendChild(canvas);

const keysDown = {};
window.addEventListener("keydown", event => keysDown[event.keyCode] = true);
window.addEventListener("keyup", event => delete keysDown[event.keyCode]);

const Paddle = (x, y, width, height) => ({
  x,
  y,
  width,
  height,
  x_speed: 0,
  y_speed: 0,

  render() {
    context.fillStyle = "#6C1D5F";
    context.fillRect(this.x, this.y, this.width, this.height);
	},
  move(x, y) {
    this.x += x;
    this.y += y;
    this.x_speed = x;
    this.y_speed = y;
    if (this.x < 0) {
      this.x = 0;
      this.x_speed = 0;
    } else if (this.x + this.width > 400) {
      this.x = 400 - this.width;
      this.x_speed = 0;
    }
	}
});

const Computer = () => ({
  paddle: Paddle(175, 10, 50, 10),
  render() {
    this.paddle.render();
	},
  update(ball) {
    var x_pos = ball.x;
    var diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos);
    if (diff < 0 && diff < -4) {
      diff = -5;
    } else if (diff > 0 && diff > 4) {
      diff = 5;
    }
    this.paddle.move(diff, 0);
    if (this.paddle.x < 0) {
      this.paddle.x = 0;
    } else if (this.paddle.x + this.paddle.width > 400) {
      this.paddle.x = 400 - this.paddle.width;
    }
	}
});

const Player = () => ({
  paddle: Paddle(175, 580, 50, 10),
  render() {
    this.paddle.render();
	},
  update() {
    for (const key in keysDown) {
      var value = Number(key);
      if (value == 37) {
        this.paddle.move(-4, 0);
      } else if (value == 39) {
        this.paddle.move(4, 0);
      } else {
        this.paddle.move(0, 0);
      }
    }
	}
});

const Ball = (x, y) => ({
	x,
  y,
  x_speed: 0,
  y_speed: 3,
  render() {
    context.beginPath();
    context.arc(this.x, this.y, 5, 2 * Math.PI, false);
    context.fillStyle = "#06a99c";
    context.fill();
	},
  update(paddle1, paddle2) {
    this.x += this.x_speed;
    this.y += this.y_speed;
    var top_x = this.x - 5;
    var top_y = this.y - 5;
    var bottom_x = this.x + 5;
    var bottom_y = this.y + 5;

    if (this.x - 5 < 0) {
      this.x = 5;
      this.x_speed = -this.x_speed;
    } else if (this.x + 5 > 400) {
      this.x = 395;
      this.x_speed = -this.x_speed;
    }

    if (this.y < 0 || this.y > 600) {
      this.x_speed = 0;
      this.y_speed = 3;
      this.x = 200;
      this.y = 300;
    }

    if (top_y > 300) {
      if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
        this.y_speed = -3;
        this.x_speed += (paddle1.x_speed / 2);
        this.y += this.y_speed;
      }
    } else {
      if (top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
        this.y_speed = 3;
        this.x_speed += (paddle2.x_speed / 2);
        this.y += this.y_speed;
      }
    }
	}
});

const player = Player();
const computer = Computer();
const ball = Ball(200, 300);

const renderCanvas = () => {
  context.fillStyle = "#ebe9f0";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.render();
  computer.render();
  ball.render();
};

const updateScene = () => {
  player.update();
  computer.update(ball);
  ball.update(player.paddle, computer.paddle);
};

const step = () => {
  updateScene();
  renderCanvas();
  animate(step);
};

animate(step);
