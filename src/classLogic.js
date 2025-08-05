export class LinkedList {
    constructor (head = null) {
        this.head = head;
    };

    append (value) {
        let pointer = this.head;
        // while (pointer !== null) {
        //     pointer = pointer.nextNode;
        // };
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