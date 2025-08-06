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

    tail () {
        if (this.head == null) {
            return null;
        } else {
            let pointer = this.head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            };
            return pointer;
        };
    };

    at (index) {
        let pointer = this.head;
        if (index === 0) {
            return pointer;
        } else if (index === this.size() - 1) {
            return this.tail();
        } else if (index > this.size() - 1) {
            return 'Index too high, the list is not that long'
        } else if (index < 0) {
            return "The index can't be negative";
        } else {
            for (let i = 1; i <= index; i++) {
                if (pointer.nextNode !== null) {
                    pointer = pointer.nextNode
                };
            };
            return pointer;
        };
    };
};

class Node {
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}