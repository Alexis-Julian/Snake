document.onkeydown = checkKey;
/* .-----------------------------------------------------------. */
class ManipulatingGame {
  constructor(movx, movy) {
    this.movx = movx;
    this.movy = movy;
    this.eatx = 0;
    this.eaty = 0;
    this.velocity = 3.0;
  }
  SnakeAnimation() {}
  SnakeEat() {
    setInterval(() => {
      this.eatx = Math.floor(Math.random() * 500);
      this.eaty = Math.floor(Math.random() * 500);
    }, 20000);
  }
  Point(my, ex, mx, ey) {
    let space = [my - ey + 10, ex - mx + 10];
    if (space[0] >= -20 && space[0] <= 20 && space[1] >= 0 && space[1] <= 40) {
      this.eatx = Math.floor(Math.random() * 500);
      this.eaty = Math.floor(Math.random() * 500);
    }
  }
  SnakeMovement(key) {
    if (key.keyCode == "38") {
      // up arrow
      this.movx -= this.velocity;
    } else if (key.keyCode == "40") {
      this.movx += this.velocity;
      // down arrow
    } else if (key.keyCode == "37") {
      this.movy -= this.velocity;
      // left arrow
    } else if (key.keyCode == "39") {
      this.movy += this.velocity;
      // right arrow
    }
    this.Point(this.movx, this.eatx, this.movy, this.eaty);
  }
}
const IGame = new ManipulatingGame(300.0, 300.0);
IGame.SnakeEat();

/*.-----------------------------------------------------------. */
class HistoryPoints {
  constuctor() {
    this.top = null;
  }
  pushPoint(element) {
    const point = new NodePoints(element, this.top);
    this.top = point;
  }
}
class NodePoints {
  constructor(element, prev) {
    this.point = element;
    this.prev = prev;
  }
}

const NewPoint = new HistoryPoints();
NewPoint.pushPoint("20");
NewPoint.pushPoint("30");
console.log(NewPoint);

/* let aux = 1.0;

for (let index = 0; index < 10; index++) {
  aux += 0.1;
}
console.log(aux.toFixed(1)); */

/*.-----------------------------------------------------------. */
/* Funciones para inicializar el Canvas */

function checkKey(e) {
  e = e || window.event;
  IGame.SnakeMovement(e);
}

function setup() {
  createCanvas(600, 600);
}
let aux = 0;
setInterval(() => {
  for (let index = 0; index < 30; index++) {}
}, 500);
setInterval(() => {
  for (let index = 0; index < 5; index++) {}
}, 500);

function draw() {
  /* Snake */
  background(255, 244, 244);
  circle(IGame.movy, IGame.movx, 20, 20);
  circle(IGame.movy, IGame.movx - 20, 20, 20);
  circle(IGame.eatx, IGame.eaty, 20, 20);
  // Establece el color de relleno a rojo
  /* EatSnake */
}
