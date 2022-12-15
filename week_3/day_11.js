/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */

class MinHeap {
    constructor() {
        /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
        // parent = Math.floor(index/2)
        // c left = index * 2
        // c right = index * 2 + 1
        this.heap = [null]
    }
    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    // return top (min numb) in the heap without removing it
    top() {
        return this.heap[1];
    }
    
    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    // insert new num into heap, and maintains order
    //  push new num to back
    //  sort array?
    insert(num){
        this.heap.push(num);
        let numIndex = this.heap.length - 1;
        while (numIndex > 1 ){
            const parentIndex = Math.floor(numIndex/2);
            if (this.heap[parentIndex] > this.heap[numIndex]) {
                // SWAP VALUES
                [this.heap[numIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[numIndex]];
                // CHANGES INDEX OF NUMINDEX
                numIndex = parentIndex;
            } else {
                // END ALGO
                break;
            }
        }
    }
}
    
    // TESTING
    console.log(`~>~>~>~>~>~>~>~>~>~>>~>~>~>~>~>~>~>~>~>~>~>~>~>~`)
    const minHeap = new MinHeap();
    minHeap.heap = [null, 2, 7, 5, 9, 14];
    console.log(`Min heap: ${minHeap.heap}`);
    console.log(`~>~>~>~>~>~>~>~>~>~>>~>~>~>~>~>~>~>~>~>~>~>~>~>~`)
    minHeap.insert(1);
    console.log(`Min heap: ${minHeap.heap}`);
    console.log(`~>~>~>~>~>~>~>~>~>~>>~>~>~>~>~>~>~>~>~>~>~>~>~>~`)

        /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
        printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
            if (parentIdx > this.heap.length - 1) {
            return;
            }
        
            spaceCnt += spaceIncr;
            this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
        
            console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
                `${this.heap[parentIdx]} (${parentIdx})`
            );
        
            this.printHorizontalTree(parentIdx * 2, spaceCnt);
        }
