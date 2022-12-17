class DLLNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // true if empty
    isEmpty(){
        return this.head === null;
    }

    // print all the values of the SLL in the console
    printValues(){
        console.log(`PRINTING DLL...`);
        // DLL IS EMPTY
        if (this.isEmpty()){
            console.log('DLL is empty.')
            return this;
        }
        // SLL IS NOT EMPTY
        let runner = this.head
        while (runner !== null){
            console.log(runner.value)
            runner =  runner.next
        }
        return this;
    }

    // insertAtFront of DLL
    insertAtFront(value){
        console.log(`Inserting ${value} to the front...`);
        const newNode = new DLLNode(value);
        // DLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // DLL IS NOT EMPTY
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // insertAtback of DLL
    insertAtBack(value){
        console.log(`Inserting ${value} to the back...`);
        const newNode = new DLLNode(value);
        // DLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // DLL IS NOT EMPTY
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        return this;
    }

    // remove middle
    remile(){
        // DLL IS EMPTY
        if (this.isEmpty()){
            return this;
        }
        let headRunner = this.head;
        let tailRunner = this.tail;
        while (headRunner !== tailRunner || headRunner != null){
            headRunner = headRunner.next;
            tailRunner = tailRunner.previous;
            //finish
        }
        return this;
    }

}


// TESTING

console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
const dll1 = new DLL();

const node1 = new DLLNode(1);
dll1.head = node1
dll1.tail = node1

console.log(`${dll1.printValues()}`);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtFront(3);
console.log(`${dll1.printValues()}`);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtFront(4);
console.log(`${dll1.printValues()}`);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtFront(5);
console.log(`${dll1.printValues()}`);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtBack(0);
console.log(`${dll1.printValues()}`);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtBack(1).insertAtBack(0).insertAtFront(5);
console.log(`${dll1.printValues()}`);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);