const Paddle = (x, y, width, height) => ({
  x,
  y,
  width,
  height,
  x_speed: 0,
  y_speed: 0,

  render(context) {
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

export default Paddle;
