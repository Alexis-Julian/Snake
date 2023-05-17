import EatSnakeManager from "./eatsnake.js";
export default class SnakeManager {
  constructor(x, y, eatm) {
    /* Llamada a la clase comida */
    this.eat = eatm;
    /* Posicion de la serpiente */
    this.x = x;
    this.y = y;
    /* Puntos en movimiento */
    this.points = [{ x: this.x - 20, y: this.y }];
  }
  Snake(headSnake) {
    headSnake(this.x, this.y, 10, "green");
    /*  this.points.map((p) => {
      headSnake(p.x, p.y, 10, "yellow");
    }); */
    headSnake(this.points[0].x, this.points[0].y, 10, "blue");
  }
  movSnake() {
    let ultkey = null;
    let aux = null;
    document.addEventListener("keydown", (e) => {
      aux = ultkey;
      ultkey = e.keyCode;
      if (ultkey != aux) this.MovPoints(ultkey);
    });
    setInterval(() => {
      if (ultkey === 37 && aux != 39) {
        /* KeyLeft */
        this.x = this.x - 1.0;
        this.points[0].x -= 1;
      } else if (ultkey === 39 && aux != 37) {
        /* KeyRight */
        this.x = this.x + 1.0;
      } else if (ultkey === 38 && aux != 40) {
        /* KeyUp */
        this.y = this.y - 1.0;
      } else if (ultkey === 40 && aux != 38) {
        /* KeyDown */
        this.y = this.y + 1.0;
        this.points[0].y += 1;
      } else {
        ultkey = aux;
      }

      this.ValidationPoint();
    }, 1000 / 60);
    console.log("123");
  }
  MovPoints(ultkey) {
    let c = 0;
    this.points.map((e) => {
      if (ultkey === 40) {
        let radio = setInterval(() => {
          e.x = e.x + 1;
          e.y = e.y - 1;
          c++;
          if (c === 20) {
            clearInterval(radio);
          }
        }, 1000 / 60);
      } else if (ultkey === 37) {
        let radio = setInterval(() => {
          e.y += 1;
          e.x += 1;
          c++;
          if (c === 20) {
            clearInterval(radio);
          }
        }, 1000 / 60);
      }
    });
    c = 0;
  }
  ValidationPoint() {
    let d = Math.sqrt(
      (this.eat.ex - this.x) ** 2 + (this.eat.ey - this.y) ** 2
    );
    if (d <= 10) {
    }
  }
}
