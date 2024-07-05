// how to solve problem

/**
 * Given 2 arrays - no size
 * return true or false
 *
 * the brute force solution is O(n^2)
 */
// data
const array1: string[] = ["a", "b", "c"];
const array2: string[] = ["p", "e", "f", "x"];

// brute force solution: O(n^2)
// function containsCommonItem(arr1: string[], arr2: string[]): boolean {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// }
// O(a*b)

// Efficient solution
function containsCommonItem(arr1: string[], arr2: string[]): boolean {
  /*
  Loop through the first array and create an object with true property
  Loop through the second array and check arr2[index] == obj.property
  */
  const map: { [key: string]: boolean } = {};

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i]
    if (!map[item]) {
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

console.log(containsCommonItem(array1, array2));
