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
  * Extracts the min num from the heap and then re-orders the heap to
  * maintain order so the next min is ready to be extracted.
  * 1. Save the first node to a temp var.
  * 2. Pop last node off and overwrite idx1 with it.
  * 3. Iteratively swap the old last node that is now at idx1 with it's
  *    smallest child IF the smallest child is smaller than it.
  * - Time: O(log n) logarithmic due to shiftDown.
  * - Space: O(1) constant.
  * @returns {?number} The min number or null if empty.
  */
    extract() {
        // SWAP FIRST AND LAST ELEMENT
        // POP LAST ELEMENT AND STORE INSIDE VARIABLE

        let parentIdx = 1;
        let leftChildIdx = parentIdx * 2
        let rightChildIdx = parentIdx * 2 + 1
        // START SHIFT DOWN LOGIC
        while(leftChildIdx < this.heap.length){
        // IS THERE A RIGHT CHILD??
        // CHECK TO SEE IF RIGHT CHILD INDEX EXISTS
        // IF ONLY THE LEFT CHILD EXISTS
        if (leftChildIdx == this.heap.length - 1) {
                // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
                if (this.heap[leftChildIdx] < this.heap[parentIdx]) {
                    [this.heap[leftChildIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[leftChildIdx]]
                    // swaps the values only in js
                }
                parentIdx = leftChildIdx
                leftChildIdx = parentIdx * 2
            }
            // IF BOTH LEFT AND RIGHT CHILD EXISTS
            else {
                // COMPARE THE CHILDREN VALUES, FIND THE LESSER VALUE
                if (this.heap[leftChildIdx] < this.heap[rightChildIdx]) {
                    // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
                    if(this.heap[leftChildIdx] < this.heap[parentIdx]) {
                        [this.heap[leftChildIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[leftChildIdx]]
                    }
                    parentIdx = leftChildIdx
                    leftChildIdx = parentIdx * 2
                }
                else {
                    // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
                    if(this.heap[rightChildIdx] < this.heap[parentIdx]) {
                        [this.heap[rightChildIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[rightChildIdx]]
                    }
                    parentIdx = rightChildIdx
                    rightChildIdx = parentIdx * 2
                }
            }
        }
    }
    // extract() {
    //     // SWAP FIRST AND LAST ELEMENT
    //     [this.heap[1],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[1]]
    //     // POP LAST ELEMENT AND STORE INSIDE VARIABLE
    //     let min = this.heap.pop()
    //     let parentIdx = 1;
    //     let leftChildIdx = parentIdx * 2
    //     // START SHIFT DOWN LOGIC
    //     while(leftChildIdx < this.heap.length){
    //       // IS THERE A RIGHT CHILD??
    //       let rightChildIdx = parentIdx * 2 + 1
    //       // CHECK TO SEE IF RIGHT CHILD INDEX EXISTS
    //       if (rightChildIdx < this.heap.length){
    //         //compare left and right child
    //         if (this.heap[leftChildIdx]>this.heap[rightChildIdx]){
    //           //take the smallest of the two and compare with parent
    //           //swap if necessary
    //           if (this.heap[rightChildIdx]<this.heap[parentIdx]){
    //             [this.heap[rightChildIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[rightChildIdx]]
    //             //set parent index to right child
    //             parentIdx = rightChildIdx
    //           }
    //         }
    //         if (this.heap[leftChildIdx]<this.heap[rightChildIdx]){
    //           //take the smallest of the two and compare with parent
    //           //swap if necessary
    //           if (this.heap[leftChildIdx]<this.heap[parentIdx]){
    //             [this.heap[leftChildIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[leftChildIdx]]
    //             //set parent index to left child
    //             parentIdx = leftChildIdx
    //           }
    //         }
    //       }
    //       if (this.heap[leftChildIdx]<this.heap[parentIdx]){
    //         [this.heap[leftChildIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[leftChildIdx]]
    //         //set parent index to left child
    //         parentIdx = leftChildIdx
    //       }
    //       //before ending the loop calculate new leftChildIdx otherwise you get an infinite loop
    //       leftChildIdx = parentIdx * 2
    //     }
    //     return min
    //   }
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
        // RETURN THE MIN VARIABLE
}

//--------------------------TEST CASES-------------------------//

