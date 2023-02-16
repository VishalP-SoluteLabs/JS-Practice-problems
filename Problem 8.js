// 8. Remove duplicates from an array and return unique values in O(n) complexity.


const arr = [3, 5, 1, 4, 2, 5, 6, 8, 8, 3, 2, 7];

const uniqueArr = (arr) => {
  let arr1 = arr.sort();

  let result = [];
  let len = arr1.length;
  for (let i = 0; i < len - 1; i++) {
    if (arr1[i + 1] !== arr1[i] && arr1[i - 1] !== arr1[i]) {

      result.push(arr1[i]);
    }
  }
  return result;
};

console.log(`${uniqueArr(arr)}`);