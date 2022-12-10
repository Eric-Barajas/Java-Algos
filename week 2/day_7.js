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

    isEmpty() { 
        return this.root === null;
    }

// ------------------- TUESDAY --------------------------//
    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) { 
        // BST IS EMPTY
        if(this.isEmpty()){
            return false;
        }  
        // BST IS NOT EMPTY
        // SET RUNNER AT ROOT
        let runner = this.root
        // while loop
        // This keeps runner, running...
        while(runner !== null){
            // searchVal is EQUAL to runner data
            if(runner.data === searchVal){
                return true;
            }
            // searchVal is LESS THAN to runner data
            if(searchVal < runner.data){
                runner = runner.left
            }
            // searchVal is GREATER THAN to runner data
            else{
                runner = runner.right 
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }
        if (current.value === searchVal) {
            return true;
        }
        return (searchVal < current.value ? this.containsRecursive(searchVal, current.left) : this.containsRecursive(searchVal, current.right));
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) { }

}

// TEST CASES
const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

console.log(threeLevelTree.min())
threeLevelTree.print()

console.log(threeLevelTree.contains(6))