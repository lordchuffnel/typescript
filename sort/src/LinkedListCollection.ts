import { Sorter } from './Sorter';

export class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedListCollection extends Sorter {
  head: Node | null = null; 

  add(data: number): void {
    const node = new Node(data);

    if(!this.head){
      this.head = node;
      return;
    } 

    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while(node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if(!this.head) {
      throw new Error("index out of range");
      
    }
    let counter = 0;
    let node: Node | null = this.head;
    while(node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('index out of bounds');
  }

  compare(lIndex: number, rIndex: number): boolean {
    if(!this.head) {
      throw new Error("list is empty");
    }
    return this.at(lIndex).data > this.at(rIndex).data;
  }

  swap(lIndex: number, rIndex: number): void {
    const leftNode = this.at(lIndex);
    const rightNode = this.at(rIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print():void {
    if(!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while(node) {
      console.log(node.data)
      node = node.next;
    }
  }
}