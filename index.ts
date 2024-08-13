/**
 * Linked Lists
 * keywords:
 *      head - tail - null
 * It is a linked lists (lol)
 * TS/JS doesn't have linkedlist DS prebuild in (Java has a linkedlist prebuild)
 * the list contains node:
 *      a node has a data and a pointer
 *          data is the actual data
 *          pointer point to the next data
 *          exemple:
 *              apple -> banana -> ananas -> null
 *              but more like
 *              apple
 *              10058 -> banana
 *                       89603 -> ananas
 *                                45213 -> null
 *          we can take a conclusion that the last data pointed is null
 *
 * The first node is called head
 * The last node is called tail
 */

// my linked list
/**
 * my DS should look something like:
 * 16 -> 10 -> 5
 *  LinkedList = {
 *     head: {
 *          value: 16,
 *           next: {
 *              value: 10,
 *              next: {
 *                  value: 5,
 *                  next: null
 *              }
 *          }
 *      }
 *  }
 */

type Noeud = {
  value: Data;
  next: Noeud | null | any;
  prev: Noeud | null | any;
};

type Data = any;

class DoublyLinkedList {
  private head: Noeud | null;
  private tail: Noeud | null;
  private length: number;

  constructor(value: Data) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: Data): DoublyLinkedList {
    const newNode: Noeud = {
      value: value,
      next: null,
      prev: null,
    };
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  prepend(value: Data): DoublyLinkedList {
    const newNode: Noeud = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(): void {
    const data: Array<Data> = [];
    let currentNode: Noeud | null = this.head;

    while (currentNode !== null) {
      data.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(data);
  }

  insert(index: number, value: Data): DoublyLinkedList {
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    if (index >= this.length) {
      this.append(value);
      return this;
    }

    const newNode: Noeud = {
      value: value,
      next: null,
      prev: null,
    };

    const leader = this.traverseToIndex(index - 1);

    if (leader) {
      const follower = leader.next;
      newNode.next = follower;
      leader.next = newNode;
      newNode.prev = leader;
      follower.prev = newNode;
      this.length++;
    }

    return this;
  }

  traverseToIndex(index: number): Noeud | null {
    let counterIndex = 0;
    let currentNode: Noeud | null = this.head;

    while (currentNode !== null && counterIndex < index) {
      currentNode = currentNode.next;
      counterIndex++;
    }

    return currentNode;
  }

  remove(index: number): void {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    if (leader) {
      const unwantedHeadData = leader.next;
      leader.next = unwantedHeadData.next;
      this.length--;
    }
  }
}

let link = new DoublyLinkedList(5);
link.prepend(1);
link.append(3);
link.insert(1, 80);
console.log(link);
link.printList();
// link.printList();
// link.remove(0);
// link.printList();

/**
 * Doubly Linked Lists
 * More optimum than linked lists
 * The first node will point to the next and the next will point to the previous
 * I can start to read backward
 */
