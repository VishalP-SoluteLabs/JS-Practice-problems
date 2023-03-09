// 7. Find the nth largest element in a sorted array.


let arr = [1,2,4,6,6,7,7,7,9,11,12];

let n = prompt('Enter the number: ')

//let arr1 = arr.sort();
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i + 1] !== arr[i]) {

    result.push(arr[i]);
  }

}
if (n > result.length) {
  console.log(`There is no ${n}th largest number`)
} else {
  console.log(result[result.length - n])
}
