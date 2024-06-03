import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([15, 45, 765, -17, 12]);
numbersCollection.sort();
console.log(`Sorted numbers from the numbers collection: ${numbersCollection.data}`);

const charCollection = new CharactersCollection('zebraliXcious')
charCollection.sort()
console.log(`Sorted chars from the char collection: ${charCollection.data}`)

const linkedList = new LinkedList()
linkedList.add(-40)
linkedList.add(13)
linkedList.add(7)
linkedList.add(8)
linkedList.sort();
console.log('Sorted numbers from the linked list:')
linkedList.print();
