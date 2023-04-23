document.onkeydown = checkKey;

class ManipulatingGame {
  constructor(movx, movy) {
    this.movx = movx;
    this.movy = movy;
    this.eatx = 0;
    this.eaty = 0;
    this.allpoints = 0;
  }

  SnakeEat() {
    setInterval(() => {
      this.eatx = Math.floor(Math.random() * 500);
      this.eaty = Math.floor(Math.random() * 500);
    }, 20000);
  }
  Point(my, ex, mx, ey) {
    let space = [my - ey + 10, ex - mx + 10];
    if (space[0] >= -20 && space[0] <= 20 && space[1] >= 0 && space[1] <= 40) {
      this.allpoints++;
      this.eatx = Math.floor(Math.random() * 500);
      this.eaty = Math.floor(Math.random() * 500);
    }
  }
  SnakeMovement(key) {
    if (key.keyCode == "38") {
      // up arrow
      this.movx -= 3;
    } else if (key.keyCode == "40") {
      this.movx += 3;
      // down arrow
    } else if (key.keyCode == "37") {
      this.movy -= 3;
      // left arrow
    } else if (key.keyCode == "39") {
      this.movy += 3;
      // right arrow
    }
    this.Point(this.movx, this.eatx, this.movy, this.eaty);
  }
}

const IGame = new ManipulatingGame(0, 0);
IGame.SnakeEat();
/* let obj = {
  valor: 0,
  set x(valor) {
    this.OnValorChange(valor);
  },
  OnValorChange: (valor) => {
    console.log("Valor", valor);
  },
}; */

function checkKey(e) {
  e = e || window.event;
  IGame.SnakeMovement(e);
}
/* Funciones para inicializar el Canvas */

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 0);
  /* Snake */
  rect(IGame.movy, IGame.movx, 20, 20);
  rect(IGame.movy, IGame.movx, 20, 20);

  /* EatSnake */
  circle(IGame.eatx, IGame.eaty, 20, 20);
  fill(255, 0, 0); // Establece el color de relleno a rojo
  stroke(0);
}
