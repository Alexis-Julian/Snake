export default class EatSnakeManager {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    setInterval(() => {
      this.ex = this.eatSpawn();
      this.ey = this.eatSpawn();
    }, 5000);
  }
  Eat(eat) {
    this.ex != undefined && eat(this.ex, this.ey, 10, "#FF0000");
  }
  eatSpawn() {
    return Math.floor(Math.random() * (this.x + this.y));
  }
}
