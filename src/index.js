import { LinkedList } from "./classLogic.js";

const list = new LinkedList();
list.append('prout');
list.append('caca');
list.prepend('chiasse');
list.prepend('bouse');
list.append('chichi?');
console.log(list);
console.log(list.toString());
list.insertAt('chac', 1);
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());