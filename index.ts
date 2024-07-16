/*
Creating my own array DS
*/

class MyArray<T> {
  dataLength: number;
  data: { [index: number]: T };

  constructor() {
    this.dataLength = 0;
    this.data = {};
  }

  get length() {
    return this.dataLength;
  }

  getItem(index: number): T {
    if (this.data[index]) {
      return this.data[index];
    }
    throw new Error("Index out of bounds");
  }

  push(item: T) {
    this.data[this.dataLength] = item;
    this.dataLength++;
    return this.dataLength;
  }

  pop(): T | undefined {
    if (this.dataLength > 0) {
      const deletedItem = this.data[this.dataLength];
      this.dataLength--;
      delete this.data[this.dataLength];
      return deletedItem;
    }
    return undefined;
  }
}

// const arr1 = new MyArray<string>();
// arr1.push("Manohy");
// arr1.push("Manohy2");
// console.log(arr1.getItem(2));
// console.log(arr1);

