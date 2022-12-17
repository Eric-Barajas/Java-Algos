/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
// BST NODE
class BSTNode {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
// BST
class BinarySearchTree {
  constructor() {
      this.root = null;
  }

/**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(current = this.root) {
        const queue = []
        const vals = []
        // shift - it removes / returns the first element in the array
        // const removedElement = queue.shift()

        // if current exists
          // add the the curent node to the queue
        
        while(queue.length > 0){
          // remove the first element in the queue
          // PUSH TO vals THE BST NODE'S VALUE

          // IF REMOVED NODE'S LEFT EXISTS
            // PUSH TO queue THE LEFT OF THE NODE
          // IF REMOVED NODDE'S RIGHT EXISTS
            // PUSH TO queue THE RIGHT OF THE NODE
        }
        // RETURN vals
    }

}