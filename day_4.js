/* 
Intro to Singly Linked Lists
 - OOP
 - Array VS SLL
*/
class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    //  MONDAY -------------------------------------------------------------------//
    /**
     * Prints all the nodes in the list to the console.
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
     isEmpty(){
        if(this.head === null){
            return true
        }
        return false
    }
     printValues() {
        // SLL IS EMPTY
        if(this.isEmpty()){
            console.log("SLL IS EMPTY")
        }
        // SLL IS NOT EMPTY
        let runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }
    //  TUESDAY -------------------------------------------------------------------//
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        // SLL IS EMPTY
            // CREATE A NEW NODE WITH THE GIVEN DATA
            // POINT THE HEAD TO THE NEW NODE
            // RETURN
        // SLL IS NOT EMPTY
            // CREATE A RUNNER AT THE HEAD
            // RUN THE RUNNER UNTIL IT GETS TO THE LAST NODE
            // CREATE A NEW NODE WITH THE GIVEN DATA
            // POINT THE RUNNER'S NEXT TO THE NEW NODE
    }
    /**
     * Adds each item of the given array to the back of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    seedFromArr(vals) {

    }

    // WEDNESDAY -------------------------------------------------------------------//

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
     insertAtFront(data) {
        // SLL IS EMPTY
            // CREATE A NEW NODE WITH THE GIVEN DATA
            // POINT THE HEAD TO THE NEW NODE
            // RETURN
        // SLL IS NOT EMPTY
            // CREATE A NEW NODE WITH THE GIVEN DATA
            // SET THE NEW NODE NEXT TO THE HEAD
            // POINT HEAD TO NEW NODE
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeAtFront() {
        // SLL IS EMPTY
            // DO NOTHING, NOTHING TO REMOVE
        // SLL IS NOT EMPTY
            // MOVE HEAD TO NEXT NODE
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {

    }
    // THURSDAY --------------------------------------------------------------------//

    /**
     * Removes the last node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the node that was removed.
     */
     removeBack() {

    }
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(target) {

    }
    // EXTRA
     /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(n) linear due to the call stack.
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?node} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    if (current === null) {
      return false;
    }
    if (current.data === val) {
      return true;
    }
    return this.containsRecursive(val, current.next);
  }

    // TESTING
let sll1 = new SLL();
sll1.insertFromBack(1)
sll1.insertFromBack(2)
sll1.insertFromBack(3)
sll1.insertFromBack(4)

sll1.insertFromFront(0)
sll1.removeAtFront()
sll1.average()

sll1.printValues()

console.log('~~~~~~~~~')