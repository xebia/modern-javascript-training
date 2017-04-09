import Paddle from './Paddle'

const Player = () => ({
  paddle: Paddle(175, 580, 50, 10),
  render(context) {
    this.paddle.render(context);
	},
  update(keysDown) {
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

export default Player;
