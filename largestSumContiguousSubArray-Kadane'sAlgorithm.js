/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   if(nums.length===1)
       return nums
   let leftSum=0,rightSum=0,sum=0;
   let maxPosNum = findLargest(nums)
   let projectedMax = nums[0];//initial number assumed to be starting point
        for(let i=0;i<nums.length;i++)
        {
             
             sum+=nums[i]
            
           if(sum<0)
               sum=0;
            if(sum>projectedMax)
                projectedMax = sum;
        }
    if(projectedMax===0 && maxPosNum<0)
         return maxPosNum
    return projectedMax
    
};

const findLargest = (arr) =>{
     let largestNumber = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largestNumber)
       largestNumber=arr[i]
    }
    return largestNumber
}
