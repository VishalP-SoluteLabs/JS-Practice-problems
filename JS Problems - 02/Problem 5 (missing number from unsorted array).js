// 5. Find the missing number from unsorted array with O(n) complexity



let sum=1;
let c=2;
let arr=[2,3,6,1,5,7,8]
for(let i=0 ;i<arr.length;i++){
    sum=sum-arr[i]+c;
    c++;
}

console.log(sum);
