import SnakeManager from "./Snake.js";
import figures from "./figures.js";
import EatSnakeManager from "./eatsnake.js";
const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
let [x, y] = [canvas.width, canvas.height].map((e) => e / 2); // Center game

/* Function utils */

/* Game */
const Figures = new figures();
const ManagerEat = new EatSnakeManager(x, y);
const ManagerSnake = new SnakeManager(x, y, ManagerEat);
ManagerSnake.movSnake();
ManagerEat.eatSpawn();

let Mapsnake = (x, y, width, height, color) => {
  Figures.createRect(x, y, width, height, color);
};

const gameLoop = () => {
  Mapsnake(0, 0, canvas.width, canvas.height, "white");
  ManagerSnake.Snake(Figures.createCircle);
  ManagerEat.Eat(Figures.createCircle);
};

let gameinterval = setInterval(gameLoop, 1000 / 60);
