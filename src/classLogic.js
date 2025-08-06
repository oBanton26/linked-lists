export class LinkedList {
    constructor (head = null) {
        this.head = head;
    };

    append (value) {
        if (this.head == null) {
            this.prepend(value);
        } else {
            let pointer = this.head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            };
            pointer.nextNode = new Node(value);
        };
    };

    prepend (value) {
        this.head = new Node(value, this.head);
    };

    size () {
        let counter = 0;
        if (this.head == null) {
            return counter;
        } else {
            let pointer = this.head;
            counter++;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
                counter++;
            }
            return counter;
        };
    };
};

export class Node {
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}