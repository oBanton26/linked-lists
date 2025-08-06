export class LinkedList {
    constructor (head = null) {
        this.head = head;
    };

    append (value) {
        if (this.head == null) {
            this.head = new Node(value);
        };
        let pointer = this.head;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        };
        pointer.nextNode = new Node(value);
        console.log(this.head.nextNode);
    };
};

export class Node {
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}