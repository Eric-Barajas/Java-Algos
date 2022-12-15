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

    // ------------------- WEDNESDAY --------------------------//
    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) { 
        // CREATE A NEW BST NODE
        let newNode = new BSTNode(newVal)
        // BST IS EMPTY
        if(this.isEmpty(){
            // POINT THE ROOT TO THE NEW BST NODE
            this.root = newNode
            // RETURN THIS (returns binary search tree)
            return this
        }
        // BST IS NOT EMPTY
        // SET THE RUNNER AT THE ROOT
        let runner = this.root
            // COMPARE THE newValue TO runner data
        while (runner != null){
            // this tells us where we need to put our new node
            // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
            // IF LEFT or RIGHT points to NULL
            if (newNode.data < runner.data && runner.left === null) {
                // POINT THE runner LEFT or RIGHT to the NEW BST NODE
                runner.left = newNode
            }
            if (newNode.data >= runner.data && runner.right === null) {
                runner.right = newNode
            }
            if(newNode.data < runner.data){
                runner = runner.left
            }
            if (newNode.data >= runner.data){
                runner = runner.right
            }
        }
        return this

        // OR
        // insert(newVal) {
        //     // BST IS EMPTY
        //     if (this.isEmpty()){
        //         // CREATE A NEW BST NODE
        //         // POINT THE ROOT TO THE NEW BST NODE
        //         // RETURN THIS
        //         this.root = new BSTNode(newVal)
        //         return this;
        //     }
        //     // BST IS NOT EMPTY
        //     // SET THE RUNNER AT THE ROOT
        //     let runner = this.root
        //     while(true){
        //         // COMPARE THE newValue TO runner data
        //         if(newVal > runner.data ) {
        //             // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
        //             // IF LEFT or RIGHT points to NULL
        //             if(runner.right === null){
        //                 runner.right = new BSTNode(newVal)
        //                 return this;
        //             } 
        //             // POINT THE runner LEFT or RIGHT to the NEW BST NODE
        //             runner = runner.right
        //         }
        //         // COMPARE THE newValue TO runner data
        //         if(newVal < runner.data ) {
        //             // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
        //             // IF LEFT or RIGHT points to NULL
        //             if(runner.left === null){
        //                 runner.left = new BSTNode(newVal)
        //                 return this;
        //             } 
        //             // POINT THE runner LEFT or RIGHT to the NEW BST NODE
        //                 runner = runner.left
        //         }
        //     }
        // }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, runner = this.root){
        if (runner == null){
            this.root = new BSTNode (newVal);
            return this
        }
        if (newVal<runner.data){
            if (runner.left==null){
                runner.left=new BSTNode (newVal);
                return this
            }
            runner = runner.left
        }
        if (runner.data<=newVal){
            if (runner.right==null){
                runner.right=new BSTNode (newVal);
                return this
            }
            runner = runner.right
        }
        return this.insertRecursive(newVal,runner)
    }

    // // EVEN MORE OPTIONS
    //     //insert val in BST
    //     insert(val){
    //         const newNode = new BSTNode(val);
    //         // BST IS EMPTY
    //         if (this.isEmpty()){
    //             this.root = newNode;
    //             return this;
    //         }
    //         // BST IS NOT EMPTY
    //         let current = this.root;
    //         while (current !== null) {
    //             if (val < current.value && current.left === null) {
    //                 current.left = newNode;
    //                 return this;
    //             }
    //             if (val >= current.value && current.right === null) {
    //                 current.right = newNode;
    //                 return this;
    //             }
    //             current = val < current.value ? current.left : current.right;
    //         }
    //         return this;
    //     }
    //     //recursive insert val in BST
    //     insertRecursive(val, current=this.root){
    //         // BST IS EMPTY
    //         if (this.isEmpty()){
    //             this.root = new BSTNode(val);
    //             return this;
    //         }
    //         // FOUND WHERE TO INSERT
    //         if (val < current.value && current.left === null) {
    //             current.left = new BSTNode(val);
    //             return this;
    //         }
    //         if (val >= current.value && current.right === null) {
    //             current.right = new BSTNode(val);
    //             return this;
    //         }
    //         // MOVE TOWARDS AND RECURSIVE
    //         return val < current.value ? this.insertRecursive(val,current.left) : this.insertRecursive(val, current.right);
    //     }

    
}

// TEST CASES
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