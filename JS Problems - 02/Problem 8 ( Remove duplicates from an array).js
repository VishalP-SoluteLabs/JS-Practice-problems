// 8. Remove duplicates from an array and return unique values in O(n) complexity.


let arr = [3, 5, 1, 4, 2, 5, 6, 8, 8, 3, 2, 7];


//Using SPLICE
arr.splice(0, arr.length,...new Set(arr));
console.log(arr)


//Using SET
arr = new Set(arr);  //stores unique values to array
arr = Array.from(arr)  //forms array from set
console.log(arr)
