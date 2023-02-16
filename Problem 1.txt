1. Find the frequency of elements in array

//Method 1: Using Reduce method of array



let arr = ["hello", "world", "java", "hello", "java" ];

let frequency=arr.reduce((initVal, item) => { 
   
    return initVal[item] ? ++initVal[item] : initVal[item] = 1, initVal;

},[]);

console.log(frequency);






//Method -2  Using Object


let freq2 = {};

arr.forEach(item => {
    return freq2[item] ? ++freq2[item] : freq2[item] = 1, freq2
});

console.log(freq2)
