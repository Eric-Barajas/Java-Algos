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

    isEmpty() { 
        return this.root === null;
    }

        // ------------------- THRUSDAY --------------------------//
    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
    */
    toArrInorder(node = this.root, vals = []) { 
        // RECRUSIVE FUNCTION
        // CHECK TO SEE IF NODE EXISTS
        if(node !== null) {
            // RECURSIVE CALL TO LEFT SIDE
            this.toArrInorder(node.left, vals)
            // PUSH THE NODE DATA INTO ARRAY
            vals.push(node.data)
            // RECURSIVE CALL TO RIGHT SIDE
            this.toArrInorder(node.right, vals)
        }
        // RETURN ARRAY OF NUMBERS
        return vals
    }
    // ------------------- FRIDAY --------------------------//
    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        // BASE CASE
        if(node === null){
            return 0
        }
        return 1 + this.size(node.left) + this.size(node.right)
    }

    /**
       * Calculates the height of the tree which is based on how many nodes from
       * top to bottom (whichever side is taller).
       * - Time: O(?).
       * - Space: O(?).
       * @param {Node} node The current node during traversal of this tree.
       * @returns {number} The height of the tree.
       */
    height(node = this.root) {
        // BASE CASE
        if(node === null){
            return 0
        }
        // COMPARE THE LEFT HEIGHT AND RIGHT HEIGHT
        // WHICHEVER HEIGHT IS BIGGER ADD ONE MORE TO THAT HEIGHT
    }

    /**
       * Determine whether the BST is balanced, for a BST to be balanced,
       * a Node's left and right height must have a max difference of 1 AND
       * all Nodes in the tree must be balanced as well.
       * - Time: O(?).
       * - Space: O(?).
       * @param {Node} node The current node during traversal of this tree.
       * @returns {number} The height of the tree.
       */
    isBalanced(node = this.root) {
        
    }


    // dont need count variable because the function call counts the nodes as we go back up
    // the function call holds the place of the number each time
}