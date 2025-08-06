import { LinkedList } from "./classLogic.js";

const list = new LinkedList();
list.append('prout');
list.append('caca');
list.prepend('chiasse');
list.prepend('bouse');
list.append('chichi?');
console.log(list);
console.log(list.size());
console.log(list.head);
console.log(list.tail());
console.log(list.at(3));