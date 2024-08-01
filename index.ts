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
};

type Data = any;

class LinkedList {
  private head: Noeud | null;
  private tail: Noeud | null;
  private length: number;

  constructor(value: Data) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: Data): LinkedList {
    const newNode: Noeud = {
      value,
      next: null,
    };
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  prepend(value: Data): LinkedList {
    const newNode: Noeud = {
      value,
      next: null,
    };
    newNode.next = this.head;
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

  insert(index: number, value: Data): LinkedList {
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    if (index >= this.length) {
      this.append(value);
      return this;
    }

    const newNode: Noeud = {
      value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);

    if (leader) {
      const holdingData = leader.next;
      newNode.next = holdingData;
      leader.next = newNode;
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

let link = new LinkedList(5);
link.append(10);
link.append(15);
link.prepend(1);
link.printList();
link.insert(2, 80);
link.printList();
link.remove(0);
link.printList();
