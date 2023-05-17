import EatSnakeManager from "./eatsnake.js";
export default class SnakeManager {
  constructor(x, y, eatm) {
    /* Llamada a la clase comida */
    this.eat = eatm;
    /* Posicion de la serpiente */
    this.x = x;
    this.y = y;
    /* Puntos en movimiento */
    this.points = 0;
    /* this.break = { x: this.x - 20, y: this.y - 20 }; */
  }

  Snake(headSnake) {
    headSnake(this.x, this.y, 10, "green");
    /* this.SpawnPoint(headSnake); */
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
    /*Centro : this.x,this.y  --- Punto : this.eat.ex  this.eat.ey   */
    let d = Math.sqrt(
      (this.eat.ex - this.x) ** 2 + (this.eat.ey - this.y) ** 2
    );
    if (d <= 10) {
      console.log("Punto");

      this.points += 1;
    }
  }
  /* SpawnPoint(headSnake) {
    let puntox = this.x;
    let puntoy = this.y;
    headSnake(puntox + 10, puntoy + 10, 10, "blue");
  } */
}
