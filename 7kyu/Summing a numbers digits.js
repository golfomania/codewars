/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  let strArr = number.toString().split("");

  /*this section would handle negative numbers but not needed to solve kata
  for (let i=0;i<strArr.length;i++){
    if (strArr[i] == "-"){
      strArr[i+1] = strArr[i] + strArr[i+1];
    }
  } */

  strArr = strArr.filter((el) => el != "-");
  let sum = strArr.reduce((sum, el) => sum + parseInt(el), 0);
  return sum;
}
