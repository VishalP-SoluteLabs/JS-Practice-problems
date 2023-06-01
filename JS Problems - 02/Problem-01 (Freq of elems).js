//1. Find the frequency of elements in array

//Method 1: Using Reduce method of array



let arr = ["hello", "world", "java", "hello", "java" ];

let frequency=arr.reduce((freqArray, item) => { 
   
    return freqArray[item] ? ++freqArray[item] : freqArray[item] = 1, freqArray;

},[]);

console.log(frequency);






//Method -2  Using Object


let freqObj = {};

arr.forEach(item => {
    return freqObj[item] ? ++freqObj[item] : freqObj[item] = 1, freqObj
});

console.log(freqObj)
