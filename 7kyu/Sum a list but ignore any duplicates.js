/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10 and for the list [1, 10, 3, 10, 10] , the function should return 4.
*/

function sumNoDuplicates(numList) {
  let newArr = numList.filter(
    (el, idx, arr) => arr.indexOf(el) == arr.lastIndexOf(el)
  );
  return newArr.reduce((a, b) => a + b, 0);
}
