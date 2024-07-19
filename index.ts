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
type Data = Array<any>;
type Key = string;
type Value = any;

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
      this.data[address] = value;
    }
  }

  public get(key: Key): Value | undefined {
    const address = this.hash(key);
    if (this.data[address]) {
      return this.data[address];
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("zaza", "Manohy");
console.log(myHashTable.get("zaza"));
