/*
Hash tables
    Dictionnary in python, Object in Js, Maps in Java
    key value pair
    hash function (optimum): 
        - input => hash(input)
        - same input same result
        - this is idempotent
    used in cache system

    context:
        we give a key that we hash using the hash function
        and a data to store
        when we add, remove, read we should always give the key

    insert O(1) - lookup O(1) - delete O(1) - search O(1)

    cons: when we have a collision(data inserted randomly can make collision) 
    the performance can be O(n) when lookup

    Map and Set are hash tables DS in typescript/javascript
*/

// Implementation of my own Hash Tables DS
type Key = string;
type Value = any;
type Data = Array<[Key, Value][]>;

class HashTable {
  data: Data;
  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: Key): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  public set(key: Key, value: Value): void {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        this.data[address][i][1] = value;
        return;
      }
    }
    this.data[address].push([key, value]);
  }

  public get(key: Key): Value | undefined {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  public keys(): Array<Key> {
    const keysArray: Key[] = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let pair of bucket) {
          keysArray.push(pair[0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("zaza", "Manohy");
myHashTable.set("yoyo", "Mama");
myHashTable.set("wawa", "Dada");
console.log(myHashTable.keys());

/*
 * Difference btw Arrays and Hash Tables

| **Operation**              | **Array**         | **Hash Table**           |
|----------------------------|-------------------|--------------------------|
| **Access**                 | O(1)              | O(1) average, O(n) worst |
| **Search**                 | O(n)              | O(1) average, O(n) worst |
| **Insertion**              | O(n)              | O(1) average, O(n) worst |
| **Deletion**               | O(n)              | O(1) average, O(n) worst |
 */
