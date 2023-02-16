// 9. Print all duplicate elements of an array



//Only numbers

const arr = [3, 5, 1, 4, 2, 5, 6, 8, 8, 3, 2, 7];

const dup_arr = (arr) => {
  let arr1 = arr.sort();
  
  let result = [];
  let len = arr1.length;
  for (let i = 0; i < len - 1; i++) {
    if (arr1[i + 1] === arr1[i] || arr1[i - 1] === arr1[i]) {
      
      result.push(arr1[i]);
    }
  }
  let set = new Set(result);
  console.log(set)

};

dup_arr(arr)

//--------------------------------------------------------------


//for strings and number both

let arr1 = ["hello",1,2,"hello",,5,6,7,1,2,8,"world"];
const uniqueElem = new Set(arr1);
const duplicate = arr1.filter(currentVal => {
      if (uniqueElem.has(currentVal)) {
         uniqueElem.delete(currentVal);
      }
      else {
         return currentVal;
      }
   }
);

console.log(duplicate);


 
       







