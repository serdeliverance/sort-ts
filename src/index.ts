import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

// let numbersCollection = new NumbersCollection([10, 3, -5, 0])

// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(sorter.collection)

let charactersCollection = new CharactersCollection('caracteres')
let sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(charactersCollection.data)
