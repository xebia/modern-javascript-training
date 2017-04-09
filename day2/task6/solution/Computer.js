import Paddle from './Paddle'

const Computer = () => ({
  paddle: Paddle(175, 10, 50, 10),
  render(context) {
    this.paddle.render(context);
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

export default Computer;
