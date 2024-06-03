import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([15, 45, 765, -17, 12]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charCollection = new CharactersCollection('zebraliXcious')
// const sorter = new Sorter(charCollection)
// sorter.sort()
// console.log(charCollection.data)

// const linkedList = new LinkedList()
// linkedList.add(-40)
// linkedList.add(13)
// linkedList.add(7)
// linkedList.add(8)
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
