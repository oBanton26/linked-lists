import { LinkedList } from "./classLogic.js";

const list = new LinkedList();
list.append('prout');
list.append('caca');
list.prepend('chiasse');
list.prepend('bouse');
list.append('chichi?');
list.pop();
console.log(list);
console.log(list.contains('chiasse'));