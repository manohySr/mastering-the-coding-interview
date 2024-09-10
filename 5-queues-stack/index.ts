/**
 * Stacks and queues
 * Less method than over DS - less action to perform
 */

/**
 * Stack
 * It uses LIFO or Last In First Out
 * ex:
 *  context: making something top of each over and we can peek the topest of it
 *  History: undo | redo
 * Action that can be done:
 *  lookup O(n) - pop O(1) - push O(1) - peek O(1)
 */

/**
 * Queues
 * It uses FIFO: First In First  Out
 * ex: waitlist example
 * Action that can be done:
 *  lookup O(n) - enqueue O(1) - dequeue O(1) - peek O(1)
 */

/**
 * Why not using array for building queues DS? cause it's inefficient => like when we do unshift in array for adding an item - O(n)
 */

type Value = any | null;

class Noeud {
  private value: Value;
  private next: Noeud | null;
  constructor(value: Noeud) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  private top: Value;
  private bottom: Value;
  private length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): Value {
    return this.top;
  }
  push(value: Value): Stack {
    if (value) {
      const newNode = new Noeud(value);

      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }

      this.length++;
    }
    return this;
  }
  pop(): Value {
    if (!this.top) {
      this.bottom = null;
      return null;
    }

    const poped = this.top.value;
    this.top = this.top.next;
    this.length--;
    return poped;
  }
}

const stack = new Stack();
stack.push("Google");
stack.push("Udemy");
stack.push("Discord");

console.log(stack);

console.log(stack.pop());

console.log(stack.pop());

console.log(stack);
