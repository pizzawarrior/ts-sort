import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([15, 45, 765, -17, 12])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

const charCollection = new CharactersCollection('zebraliXcious')
const sorter = new Sorter(charCollection)
sorter.sort()
console.log(charCollection.data)
