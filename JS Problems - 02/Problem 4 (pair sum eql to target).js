// 4. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

let arr = [1, 2, 3, 4, 6, 7, 8, 9];
 

function twoSum(arr,num){
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
           if(arr[i]+arr[j]==num){
                result.unshift([arr[j],arr[i]]);
           }

        }
    }
    return result;
    
}
console.log(twoSum(arr, 9));
