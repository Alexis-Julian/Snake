import EatSnakeManager from "./eatsnake.js";
export default class SnakeManager {
  constructor(x, y, eatm) {
    /* Llamada a la clase comida */
    this.eat = eatm;
    this.eatxy = [];
    /* Posicion de la serpiente */
    this.x = x;
    this.y = y;
    /* Puntos en movimiento */
    this.points = [{ x: 280, y: 300 }];
    this.break = { x: this.x - 20, y: this.y - 20 };
  }

  Snake(headSnake) {
    headSnake(this.x, this.y, 10, "green");
    /*  this.points.map((p) => {
      headSnake(p.x, p.y, 10, "yellow");
    }); */
  }

  movSnake() {
    let ultkey = null;
    let aux = null;
    document.addEventListener("keydown", (e) => {
      aux = ultkey;
      ultkey = e.keyCode;
    });
    setInterval(() => {
      if (ultkey === 37 && aux != 39) {
        this.x = this.x - 1.0;
        /* KeyLeft */
      } else if (ultkey === 39 && aux != 37) {
        this.x = this.x + 1.0;
        /* KeyRight */
      } else if (ultkey === 38 && aux != 40) {
        /* KeyUp */
        this.y = this.y - 1.0;
      } else if (ultkey === 40 && aux != 38) {
        /* KeyDown */
        this.y = this.y + 1.0;
      } else {
        ultkey = aux;
      }
      this.ValidationPoint();
    }, 1000 / 60);
  }
  ValidationPoint() {
    if (this.eat.ex === this.x && this.eat.ey === this.y) {
      console.log("Validation point");
    }
  }
  /* Guardado de valor cada 5seg */
  eatPos() {
    setInterval(() => {
      this.eatxy = [this.eat.ex, this.eat.ey];
    }, 5000);
  }

  /* movPoints() {
    this.points.map((p) => {
      if (p.x < this.break.x) {
        for (let index = 0; p.x < this.break.x; index++) {
          p.x += 1;
        }
      } else if (p.x == this.break.x) {
        this.break.x = this.x - 20;
      }
    });
  } */
}
