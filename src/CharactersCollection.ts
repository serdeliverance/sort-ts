import { Sortable } from './Sorter'

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    )
  }

  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split('')

    let leftHand = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }
}
