// 6. Find the missing number from sorted array with O(n) complexity


let arr = [2, 5, 3, 1, 9,8,8,8, 7,7];
let missingValues = [];

let set = new Set(arr);

let arr1 = arr.sort();

//console.log(arr1)

let len = arr1.length;
for(let i=arr1[0];i<arr1[len - 1];i++){
    if (!set.has(i)) {
    missingValues.push(i);
  }
}

console.log(missingValues)