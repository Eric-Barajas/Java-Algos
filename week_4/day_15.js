/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
      this.items = [];
    }
  
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        return this.items.push(3)
    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        let firstElement = this.items.shift()
        return firstElement
    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0]
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0
    }
    
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length
    }
}


// QUEUE CLASS EXTRA CHALLENGE
class QueueNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(data){
        let newQueueNode = new QueueNode(data);
        if (this.head == null) {
            this.head = newQueueNode; 
            this.tail = newQueueNode;
            return this; 
        }
        
        this.tail.next = newQueueNode; 
        this.tail = newQueueNode; 
        return this; 
    }

    dequeue() {
        if (this.head == null) {
            return this; 
        }
        // storing data because if we don't it will disappear into the void 
        let newData = this.head.data

        if (this.head == this.tail) {
            this.head = this.head.next;
            this.tail = null;
            return newData; 
        }
        
        // moving start point to next node since we are removing first value 
        this.head = this.head.next;
        return newData; 
    }
}

// let queue1 = new Queue(); 
// queue1.enqueue(5).enqueue(7).dequeue(); 
// console.log(queue1);

let linkedQueue1 = new LinkedQueue(); 
linkedQueue1.enqueue(2).enqueue(4);
console.log(linkedQueue1);

console.log(linkedQueue1);
console.log(linkedQueue1.dequeue());

console.log(linkedQueue1);