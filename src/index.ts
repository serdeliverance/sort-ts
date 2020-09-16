class Sorter {
    constructor(public collection: number[]) {
    }

    sort(): void {
        let length = this.collection.length
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length -i - 1; j++) {

                // if collection is an array of numbers
                if (this.collection instanceof Array) {             // type guard
                    // this.collection.push             // we can use Array specifyc operations inside the Type Guard block
                    // so, at this point collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        let leftHand = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = leftHand
                    }
                }

                if (typeof this.collection === 'string') { // type guard for collection of string

                }


                // if collection is an array of strings...
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 6])
sorter.sort()
console.log(sorter.collection)