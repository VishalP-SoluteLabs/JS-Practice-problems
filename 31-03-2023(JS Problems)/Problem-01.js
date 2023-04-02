/*
Two number sum:

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in the array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 
Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.
Sample Input: array = [ 3, 5, -4, 8, 11, 1, -1, 6 ], targetSum = 10
Sample Output: [ -1, 11 ] 
*/



function twoNumberSum(array, targetSum) {
  array = new Set(array)    // to avoid repeated elements 
  let arr = [];
  for (let num of array) {
    const diff = targetSum - num;
    if (array.has(diff)) {
        let a = arr.flat(2)      //to convert array from [[a,b], [c,d]] to [a,b,c,d]
        if(!(a.includes(diff)&&a.includes(num))  && diff !== num){ //to check if the pair already exists or not and also a number dividing the targetsum doesn't get repeated 
            arr.push([diff, num]);
        }     
    }
  }
  return arr;
}
console.log(twoNumberSum( [ 3, 5, 2, -4, 8, 11, 1, -1, 6 ], 10))
