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
    }
};

export class Node {
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}