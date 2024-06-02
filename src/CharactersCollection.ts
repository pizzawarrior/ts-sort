export class CharactersCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        const tempArray = this.data.split('')
        return tempArray[leftIndex] > tempArray[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const tempArrayOfChars = this.data.split('')
        const leftChar = tempArrayOfChars[leftIndex];
        tempArrayOfChars[leftIndex] = tempArrayOfChars[rightIndex];
        tempArrayOfChars[rightIndex] = leftChar;
        this.data = tempArrayOfChars.join('')
    }
}
