export default class EatSnakeManager {
  constructor(x, y) {
    /* CANVAS LONGITUD */
    this.x = x;
    this.y = y;
    /* CENTRO DE LA COMIDA */
    this.ex = 250;
    this.ey = 320;
  }
  Eat(eat) {
    this.ex != undefined && eat(this.ex, this.ey, 10, "#FF0000");
  }
  eatSpawn() {
    return Math.floor(Math.random() * (this.x + this.y));
  }
}
