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
    
  /*
  quiz
  given two array [0,3,4,31], [4,6,30] that are sorted
  merge it to one array that still sorted
  */
  
  function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0;
    let j = 0;
  
    if (arr1.length === 0) {
      return arr2;
    }
  
    if (arr2.length === 0) {
      return arr1;
    }
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    return mergedArray;
  }
  
  //  O(2n)
  
  console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
  