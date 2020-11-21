
var canJump = function(nums) {
    
   var last_good=nums.length-1;
    for(i=nums.length-1;i>=0;i--)
        {
            if(i+nums[i]>=last_good)
                last_good=i;
        }
    
    return last_good==0;
}