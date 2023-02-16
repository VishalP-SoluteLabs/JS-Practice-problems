// 2. Group items on the basis of age of given array of object


let people = [
 {name:"Alice", age: 21},
 {name:"Max", age: 20},
 {name:"Jane", age: 20}
];


const result = people.reduce(function(initVal,item){
    
    initVal[item.age] = initVal[item.age] || [];
    initVal[item.age].push(item);
    
    return initVal;
},{});

console.log(result)
