/*
  There is static array and dynamic array
  In other language like C++ or Java, you have access static array and more
  access to memory usage

  But in JS or higher language like python, you don't need to worry about that,
  it's  dynamic
  so sometime the 0(1) is O(n) in push method per example
*/

const strings: string[] = ["a", "b", "c"];

strings.push("d"); // O(1)

strings.pop(); // O(1)

strings.unshift("x"); // O(n)

strings.splice(2, 0, "string added"); // O(n/2) => O(n)

console.log(strings);
