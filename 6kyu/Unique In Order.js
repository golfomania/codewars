/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  console.log("input: " + iterable);

  let result = iterable.length > 0 ? [iterable[0]] : [];
  console.log("result start: " + result);

  if (result.length > 0) {
    for (let i = 1; i < iterable.length; i++) {
      console.log(
        i,
        iterable[i - 1],
        iterable[i],
        iterable[i - 1] != iterable[i]
      );

      if (iterable[i - 1] != iterable[i]) {
        result.push(iterable[i]);
      }
    }
  }
  console.log("result end: " + result);
  return result;
};
