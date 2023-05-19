import EatSnakeManager from "./eatsnake.js";
export default class SnakeManager {
  constructor(x, y, eatm) {
    /* Llamada a la clase comida */
    this.eat = eatm;
    /* Posicion de la serpiente */
    this.x = x;
    this.y = y;
    /* Puntos en movimiento */
    this.points = [{ x: this.x, y: this.y + 20 }];
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
    document.addEventListener("keydown", ({ key }) => {
      aux = ultkey;
      ultkey = key;
      if (ultkey != aux) this.MovPoints(ultkey);
    });
    setInterval(() => {
      if (ultkey === "ArrowLeft" && aux != "ArrowRight") {
        /* KeyLeft */
        this.x = this.x - 1.0;
      } else if (ultkey === "ArrowRight" && aux != "ArrowLeft") {
        /* KeyRight */
        this.x = this.x + 1.0;
      } else if (ultkey === "ArrowUp" && aux != "ArrowDown") {
        /* KeyUp */
        this.y = this.y - 1.0;
      } else if (ultkey === "ArrowDown" && aux != "ArrowUp") {
        /* KeyDown */
        this.y = this.y + 1.0;
      } else {
        ultkey = aux;
      }
      this.ValidationPoint();
      this.MovPoints(ultkey, aux);
    }, 1000 / 60);
  }
  MovPoints(ultkey, antkey) {
    this.points.map((e) => {
      if (ultkey === "ArrowUp") {
        const centro = e.y - 20;
        let punto = this.y + 10;
        let distance = Math.sqrt((this.x - e.x) ** 2 + (punto - centro) ** 2);
        if (distance > 9 && distance < 11) {
          e.y -= +1;
        } else if (distance < 9) {
          console.log("Interior");
        } else {
          if (antkey == "ArrowRight") {
            e.x += 1;
          } else if (antkey == "ArrowLeft") {
            e.x -= 1;
          }
        }
      } else if (ultkey == "ArrowRight") {
        const centro = e.x + 20;
        const punto = this.x - 10;
        let distance = Math.sqrt((punto - centro) ** 2 + (this.y - e.y) ** 2);
        distance = Math.floor(distance);
        if (distance > 9 && distance < 11) {
          e.x -= -1;
        } else if (distance < 9) {
          e.x += 1;
        } else {
          if (antkey == "ArrowDown") {
            e.y += 1;
          } else if (antkey === "ArrowUp") {
            e.y -= 1;
          }
        }
      } else if (ultkey == "ArrowLeft") {
        let centro;
        let punto;
        centro = e.x - 20;
        punto = this.x + 10;
        let distance = Math.sqrt((punto - centro) ** 2 + (this.y - e.y) ** 2);
        distance = Math.floor(distance);
        if (distance > 9 && distance < 11) {
          e.x += -1;
        } else if (distance < 9) {
          e.x -= 1;
        } else {
          if (antkey == "ArrowDown") {
            e.y += 1;
          } else if (antkey === "ArrowUp") {
            e.y -= 1;
          }
        }
      } else if (ultkey == "ArrowDown") {
        let centro = e.y + 20;
        let punto = this.y - 10;
        let distance = Math.sqrt((this.x - e.x) ** 2 + (punto - centro) ** 2);
        distance = Math.floor(distance);
        if (distance > 9 && distance < 11) {
          e.y += 1;
        } else if (distance < 9) {
        } else {
          if (antkey == "ArrowRight") {
            e.x += 1;
          } else if (antkey == "ArrowLeft") {
            e.x -= 1;
          }
        }
      }
    });
  }

  ValidationPoint() {
    let d = Math.sqrt(
      (this.eat.ex - this.x) ** 2 + (this.eat.ey - this.y) ** 2
    );
    if (d <= 10) {
    }
  }
}
