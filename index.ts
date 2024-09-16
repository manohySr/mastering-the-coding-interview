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

class BinaryTree {
  private value: any;
  private left: any;
  private right: any;
  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
