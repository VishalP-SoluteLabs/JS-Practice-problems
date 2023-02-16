// 7. Find the nth largest element in a sorted array.


let arr = [1, 6, 8, 4, 2, 9, 4];

let n = prompt('Enter the number: ')

let arr1 = arr.sort();
let result = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i + 1] !== arr1[i]) {

    result.push(arr1[i]);
  }

}
let len = result.length
if (n > len) {
  console.log(`There is no ${n}th largest number`)
} else {
  console.log(result[len - n])
}