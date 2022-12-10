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
    // // preorder
    // toArrInorder(node = this.root, vals = []) { 
    //     // RECRUSIVE FUNCTION
    //     // CHECK TO SEE IF NODE EXISTS
    //     if(node !== null) {
    //         // PUSH THE NODE DATA INTO ARRAY
    //         vals.push(node.data)
    //         // RECURSIVE CALL TO LEFT SIDE
    //         this.toArrInorder(node.left, vals)
    //         // RECURSIVE CALL TO RIGHT SIDE
    //         this.toArrInorder(node.right, vals)
    //     }
    // // postorder
    // toArrInorder(node = this.root, vals = []) { 
    //     // RECRUSIVE FUNCTION
    //     // CHECK TO SEE IF NODE EXISTS
    //     if(node !== null) {
    //         // PUSH THE NODE DATA INTO ARRAY
    //         this.toArrInorder(node.left, vals)
    //         // RECURSIVE CALL TO RIGHT SIDE
    //         this.toArrInorder(node.right, vals)
    //         vals.push(node.data)
    //         // RECURSIVE CALL TO LEFT SIDE
    //     }
    // }
}
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);
fullTree.print();