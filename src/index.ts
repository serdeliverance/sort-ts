import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'

console.log('Sorting a numbers collection')

let numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

console.log('Sorting a character collection')

let charactersCollection = new CharactersCollection('caracteres')
charactersCollection.sort()
console.log(charactersCollection.data)

console.log('Sorting a linked list')

let linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-3)
linkedList.add(0)
linkedList.add(45)
linkedList.add(7)
linkedList.sort()
linkedList.print()
