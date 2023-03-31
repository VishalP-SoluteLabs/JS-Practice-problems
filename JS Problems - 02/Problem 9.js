// 9. Print all duplicate elements of an array



const arr = [1, 'hello', 2, 'world','hello', 5, 2, 7, 8.2, 8.2, 'world'];

const duplicates = arr.filter((element, index) => {
  return arr.indexOf(element) === index && arr.lastIndexOf(element) !== index;       /*The lastIndexOf() method is used to check whether the 
                                                                                       current element of arr is not equal to the current index*/

});

console.log(duplicates); 
