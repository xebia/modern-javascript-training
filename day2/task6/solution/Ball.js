const Ball = (x, y) => ({
	x,
  y,
  x_speed: 0,
  y_speed: 3,
  render(context) {
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

export default Ball;
