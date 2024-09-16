// There are many tree DS
// LinkedList are type of Tree
// binary tree is one of the type
// binary tree is a tree where a parent has only one or 2 childs
/**
 * There is root
 * In the right of the root the greater
 * In the left the lower
 *
 *  lookup O(log N)
 *  insert O(log N)
 *  delete O(log N)
 *
 * There is Balanced and Unbalanced BST
 *
 * Unbalanced BST can: have O(n) for all action
 *
 * Pros: Better than O(n) - Order - Flexible Size
 * Cons: No O(1) operations
 */

const { createIncrementalCompilerHost } = require("typescript");

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {}
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right == null ? null : traverse(node.right);
  return tree;
}
