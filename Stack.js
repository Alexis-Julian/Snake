/* Ejercicio 4 Chat Gpt*/
class Stack {
  constructor() {
    this.top = null;
  }
  push(caracter) {
    const data = new Node(caracter, this.top);
    this.top = data;
  }
  pop() {
    let element = this.top;
    this.top = this.top.prev;
    return element;
  }
  peek() {
    return this.top;
  }
}
class Node {
  constructor(element, prev) {
    this.element = element;
    this.prev = prev;
  }
}

const stack = new Stack(15);
stack.push(15);
stack.push(30);
console.log(stack);
/* Destructuring */
function palindromo(e) {
  let i = 0;
  let bool = false;
  while (i < e[0].length && e[0].length === e[1].length && bool == false) {
    e[0][i] === e[1][e[1].length - i - 1] ? (bool = true) : (bool = false);
    i++;
  }
  console.log(bool);
}

palindromo(["arroz", "zorra"]);
