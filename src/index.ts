// This can be shortened to the uncommented version below
// class Sorter {
//     collection: number[];
//     constructor(collection: number[]) {
//         this.collection = collection
//     }
// }
// const sorter = new Sorter([8, 17, 91, 30]);
// console.log(sorter.collection[1])

class Sorter {
    constructor(public collection: number[]) {}
// this will be our bubble sort method; it will return nothing
    sort(): void {
        // const length = this.collection.length -> destructured:
        const { length } = this.collection;
        for (let i = 0; i < length; i++){
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftNum = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftNum;
                }
            }
        }
    }
}
const sorter = new Sorter([15, 45, 765, -17, 12])
// sort the collection
sorter.sort()
// print collection
console.log(sorter.collection)
