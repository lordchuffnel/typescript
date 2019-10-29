import { Sorter } from './Sorter';

export class CharactorsCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(lIndex: number, rIndex: number): boolean {
    return this.data[lIndex].toLowerCase() > this.data[rIndex].toLowerCase();
  }

  swap(lIndex: number, rIndex: number): void {
    const charactors = this.data.split('');
    const leftHand = charactors[lIndex];
    charactors[lIndex] = charactors[rIndex];
    charactors[rIndex] = leftHand;

    this.data = charactors.join('');
  }
}