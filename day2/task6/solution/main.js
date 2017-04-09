import { animate } from './animation';
import { createCanvas } from './canvas'
import Ball from './Ball';
import Computer from './Computer';
import Paddle from './Paddle';
import Player from './Player';

const { canvas, context } = createCanvas(400, 600);
document.body.appendChild(canvas);

const keysDown = {};
window.addEventListener("keydown", event => keysDown[event.keyCode] = true);
window.addEventListener("keyup", event => delete keysDown[event.keyCode]);

const player = Player();
const computer = Computer();
const ball = Ball(200, 300);

const renderCanvas = () => {
  context.fillStyle = "#ebe9f0";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.render(context);
  computer.render(context);
  ball.render(context);
};

const updateScene = () => {
  player.update(keysDown);
  computer.update(ball);
  ball.update(player.paddle, computer.paddle);
};

const step = () => {
  updateScene();
  renderCanvas();
  animate(step);
};

animate(step);
