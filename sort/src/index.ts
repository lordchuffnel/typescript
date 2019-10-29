import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactorsCollection } from './CharactorsCollection';
import { LinkedListCollection } from './LinkedListCollection';


const numbersCollection = new NumbersCollection([10, 4, -1, 8]);
numbersCollection.sort();
console.log(numbersCollection.data);


const charactorsCollection = new CharactorsCollection('fjisltjkdnw');
charactorsCollection.sort();
console.log(charactorsCollection.data);
 

const linkedList = new LinkedListCollection();
linkedList.add(50);
linkedList.add(-10);
linkedList.add(488);
linkedList.add(47);

linkedList.sort();
linkedList.print();
 